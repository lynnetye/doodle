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

  startTimeSelected: function () {
    var startTime = this.get('selectedStartTime');

    Ember.$('.start-time-input').val(startTime);
    this.sendAction('startTimeSelected', startTime);
    this.set('startMenuVisible', false);
  }.observes('selectedStartTime'),

  endTimeSelected: function () {
    var endTime = this.get('selectedEndTime');

    Ember.$('.end-time-input').val(endTime);
    this.sendAction('endTimeSelected', endTime);
    this.set('endMenuVisible', false);
  }.observes('selectedEndTime'),

  actions: {
    startFocusIn: function () {
      this.set('startMenuVisible', true);
    },

    endFocusIn: function () {
      this.set('endMenuVisible', true);
    }
  }
});
