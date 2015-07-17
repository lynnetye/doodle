import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['date-selection'],

  timesSortRules: ['start:asc'],

  sortedTimes: Ember.computed.sort('newEvent.date.times.@each.start', 'timesSortRules'),

  showEndDateIcon: function () {
    return this.get('date.diffInDays') > 1;
  }.property('date.diffInDays'),

  timeSlotsLinkVisible: false,

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
    }
  }
});
