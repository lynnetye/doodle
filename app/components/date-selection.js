import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['date-selection'],

  timeSlotsLinkVisible: false,

  showEndDateIcon: function () {
    return this.get('date.diffInDays') > 1;
  }.property('date.diffInDays'),

  mouseEnter: function () {
    this.set('timeSlotsLinkVisible', true);
  }.on('mouseEnter'),

  mouseLeave: function () {
    this.set('timeSlotsLinkVisible', false);
    this.sendAction('mouse-leave');
  }.on('mouseLeave'),

  actions: {
    addTimeSlot: function () {
      this.sendAction('createNewTimeSlot', this.get('date'));
    }
  }
});
