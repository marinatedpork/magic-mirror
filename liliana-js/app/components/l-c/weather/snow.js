import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['weather-object'],
  didRender() {
    this.$().snowfall({
      shadow : true,
      round : true,
      minSize: 5,
      maxSize:8,
      flakeCount:100
    });
  }
});
