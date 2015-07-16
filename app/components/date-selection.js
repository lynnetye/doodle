import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['date-selection'],

  timeSlotsLinkVisible: false,

  timeSelectorVisible: false,

  mouseEnter: function () {
    this.set('timeSlotsLinkVisible', true);
  }.on('mouseEnter'),

  mouseLeave: function () {
    this.set('timeSlotsLinkVisible', false);
    this.sendAction('mouse-leave');
  }.on('mouseLeave'),

  actions: {
    // mouseEnterDateSelection: function () {
    //   this.set('timeSlotsLinkVisible', true);
    // },

    // mouseLeaveDateSelection: function () {
    //   this.set('timeSlotsLinkVisible', false);
    // },

    displayTimeSelector: function () {
      this.set('timeSelectorVisible', true);
    }
  }
});
