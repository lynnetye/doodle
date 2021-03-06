import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-dates-full-calendar'],

  createFullCalendar: function () {
    var controller = this;

    Ember.$('.create-dates-full-calendar').fullCalendar({
      buttonIcons: {
        prev: 'left-double-arrow',
        next: 'right-single-arrow'
      },
      buttonText: {
        prev: 'Prev Week',
        next: 'Next Week',
      },
      columnFormat: 'ddd D',
      events: controller.get('eventList'),
      eventRender: function (event, element) {
        var width = event.width * 86 + ((event.width - 1) * 6);

        element.css('width', width + 'px');
      },
      select: function (start, end, jsEvent, view) {
        var dateObject = {
          startDate: start.format('ll'),
          startMonth: start.format('MMM'),
          startDayOfWeek: start.format('ddd'),
          startDayOfMonth: start.format('DD'),
          endDate: end.format('ll'),
          endMonth: end.format('MMM'),
          endDayOfWeek: end.format('ddd'),
          endDayOfMonth: end.format('DD'),
          diffInDays: end.diff(start, 'days')
        };

        controller.sendAction('selectDates', dateObject);
      },
      defaultView: 'month',
      firstDay: 1,
      header: {
        left: 'prev',
        center: 'title',
        right: 'next',
      },
      selectable: true,
      titleFormat: 'MMMM YYYY',
      timeFormat: 'h:mmt',
      timezone: 'local',
      unselectAuto: false
    });
  }.on('didInsertElement'),

  updateEventsOnCalendar: function () {
    Ember.$('.create-dates-full-calendar').fullCalendar('removeEvents');
    Ember.$('.create-dates-full-calendar').fullCalendar(
      'addEventSource', this.get('eventList'));
  }.observes('eventList.length')
});
