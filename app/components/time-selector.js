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

  storeStartTime: function () {
    var startTime = this.get('selectedStartTime');

    this.set('startMenuVisible', false);
    Ember.$('.start-time-input').val(startTime);
    this.set('time.start', startTime);
  }.observes('selectedStartTime'),

  storeEndTime: function () {
    var endTime = this.get('selectedEndTime');

    this.set('endMenuVisible', false);
    Ember.$('.end-time-input').val(endTime);
    this.set('time.end', endTime);
  }.observes('selectedEndTime'),

  actions: {
    showStartTimeMenu: function () {
      this.set('startMenuVisible', true);
      console.log('startFocusIn');
    },

    showEndTimeMenu: function () {
      this.set('endMenuVisible', true);
      console.log('endFocusIn');
    },

    deleteTime: function () {
      this.get('time').deleteRecord();
      console.log('delete button');
    }
  }
});
