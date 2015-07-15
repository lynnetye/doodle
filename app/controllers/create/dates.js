import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['fullDate:asc'],
  sortedDates: Ember.computed.sort('newEvent.dates.@each.fullDate', 'datesSortRules'),

  actions: {
    submitDates: function () {
      this.transitionToRoute('/create/times');
    },

    storeSelectedDate: function (date) {
      this.store.createRecord('date', {
        fullDate: date.fullDate,
        month: date.month.toUpperCase(),
        weekDay: date.weekDay,
        monthDay: date.monthDay,
        event: this.get('newEvent')
      });
    }
  }
});
