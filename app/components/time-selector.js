import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['time-selector'],

  startMenuVisible: false,

  endMenuVisible: false,

  times: [ '8:00am', '9:00am', '10:00am',
           '11:00am', '12:00pm', '1:00pm',
           '2:00pm', '3:00pm', '4:00pm',
           '5:00pm', '6:00pm', '7:00pm' ],

  selectedStartTime: null,

  selectedEndTime: null,

  fillStartTimeInput: function () {
    Ember.$('.start-time-input').val(this.get('selectedStartTime'));
    this.set('startMenuVisible', false);
  }.observes('selectedStartTime'),

  fillEndTimeInput: function () {
    Ember.$('.end-time-input').val(this.get('selectedEndTime'));
    this.set('endMenuVisible', false);
  }.observes('selectedEndTime'),

  actions: {
    startFocusIn: function () {
      this.set('startMenuVisible', true);
    },

    startFocusOut: function () {
      // this.set('startMenuVisible', false);
    },

    endFocusIn: function () {
      this.set('endMenuVisible', true);
    },

    endFocusOut: function () {
      // this.set('endMenuVisible', false);
    },
  }
});
