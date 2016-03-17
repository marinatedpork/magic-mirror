import Ember from 'ember';
import ajax from 'ic-ajax';

const WEATHER_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%2012784260&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

export default Ember.Component.extend({

  elementId: 'weather',

  didRender() {
    this.getWeather();
    let fn = this.getWeather.bind(this);
    let interval = setInterval(fn, 120000);
    this.set('interval', interval);
  },

  getWeather() {
    let self = this;
    ajax(WEATHER_URL).then((data) => {
      self.renderWeather(data);
    });
  },

  renderWeather(data) {
    let { query: { results: { channel: { item: { condition: {
      temp, text
    } } } } } } = data;
    // let condition = text.toLowerCase();
    let condition = 'rain';
    this.set('degrees', temp + ' º ');
    this.set('description', condition);
    switch(true) {
      case /cloudy/.test(condition):
        this.set('weatherCondition', 'l-c/weather/cloudy');
        break;
      case /rain/.test(condition):
        this.set('weatherCondition', 'l-c/weather/rain');
        break;
      case /snow/.test(condition):
        this.set('weatherCondition', 'l-c/weather/snow');
        break;
      default:
        this.set('weatherCondition', false);
        break;
    }
  }

});
