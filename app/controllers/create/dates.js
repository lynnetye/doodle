import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['startDate:asc'],

  sortedDates: Ember.computed.sort('newEvent.dates.@each.startDate', 'datesSortRules'),

  actions: {
    submitDates: function () {
      this.transitionToRoute('/create/times');
    },

    createNewDateRecord: function (data) {
      this.store.createRecord('date', {
        startDate: data.startDate,
        startMonth: data.startMonth,
        startDayOfWeek: data.startDayOfWeek,
        startDayOfMonth: data.startDayOfMonth,
        endDate: data.endDate,
        endMonth: data.endMonth,
        endDayOfWeek: data.endDayOfWeek,
        endDayOfMonth: data.endDayOfMonth,
        diffInDays: data.diffInDays,
        event: this.get('newEvent')
      });
    },

    createNewTimeRecord: function (date) {
      this.store.createRecord('time', {
        date: date
      });
    }
  }
});
