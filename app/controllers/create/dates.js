import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['startDate:asc'],

  sortedDates: Ember.computed.sort('newEvent.dates.@each.startDate', 'datesSortRules'),

  events: function () {
    var eventsList = [],
        dates = this.get('newEvent.dates');

    dates.forEach(function (date) {
      eventsList.push({
        start: moment(date.get('startDate')).format('YYYY-MM-DD'),
        end: moment(date.get('endDate')).format('YYYY-MM-DD'),
        className: 'full-calendar-event-highlight',
        width: date.get('diffInDays')
      });
    })

    return eventsList;
  }.property('newEvent.dates.length'),

  actions: {
    submitDates: function () {
      this.transitionToRoute('/create/extras');
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
