import Ember from 'ember';

export default Ember.Component.extend({

  elementId: 'clock',

  init() {
    this._super(...arguments);
    this.tickTock();
  },

  tickTock() {
    let rightTheFuckNow = new Date();
    let h = rightTheFuckNow.getHours();
    let m = rightTheFuckNow.getMinutes();
    let s = rightTheFuckNow.getSeconds();
    let meridian = (h >= 12) ? ' PM' : ' AM';
    h = '' + ((h > 12) ? h - 12 : h);
    m = this.checkTime(m);
    s = this.checkTime(s);
    this.set('minutes', m);
    this.set('hours', h);
    this.set('meridian', meridian);
    let fn = this.tickTock.bind(this);
    setTimeout(fn, 500);
  },

  checkTime(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  }

});
