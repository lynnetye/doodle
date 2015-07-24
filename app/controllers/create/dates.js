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
    });

    return eventsList;
  }.property('newEvent.dates.length'),

  actions: {
    createNewDateRecord: function (data) {
      var currentEvent = this.get('newEvent');

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
        event: currentEvent
      });
    },

    createNewTimeRecord: function (currentDate) {
      // currentDate.set('isAllDay', false);
      this.store.createRecord('time', {
        date: currentDate,
        start: null,
        end: null
      });
    },

    saveEvent: function () {
      var newEvent = this.get('newEvent'),
          dates = newEvent.get('dates'),
          controller = this;

      newEvent.save()
        .then(function () {
          var promises = [];

          dates.forEach(function (date) {
            if (date.get('times.length') > 0) {
              date.set('isAllDay', false);
            }

            promises.push(date.save());
          });

          return Ember.RSVP.all(promises);
        })
        .then(function () {
          var promises = [];

          dates.forEach(function (date) {
            date.get('times').forEach(function (time) {
              promises.push(time.save());
            });
          });

          return Ember.RSVP.all(promises);
        })
        .then(function () {
          controller.transitionToRoute('event.poll', newEvent);
        });
    }
  }
});
