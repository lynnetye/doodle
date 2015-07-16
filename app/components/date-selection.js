import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['date-selection'],

  timesSortRules: ['start:asc'],

  sortedTimes: Ember.computed.sort('newEvent.date.times.@each.start', 'timesSortRules'),

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
    createNewTimeSlot: function () {
      this.set('timeSelectorVisible', true);
      this.sendAction('createNewTimeSlot', this.get('date'));
    },

    startTimeSelected: function (startTime) {
      this.sendAction('startTimeSelected', {
        startTime: startTime,
        // date:
      });
    },

    endTimeSelected: function (endTime) {
      this.sendAction('endTimeSelected', endTime);
    }
  }
});
