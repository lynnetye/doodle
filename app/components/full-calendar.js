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
      dayClick: function(date, jsEvent, view) {
        var fullDate = date.toDate(),
          month = date.format('MMM'),
          weekDay = date.format('ddd'),
          monthDay = date.format('DD'),
          dateObject = {
            fullDate: fullDate,
            month: month,
            weekDay: weekDay,
            monthDay: monthDay
          };

        controller.sendAction('dateSelected', dateObject)
        console.log('clicked on: ' + month + ', ' + monthDay + ', ' + weekDay);
        console.log('coordinates:' + jsEvent.pageX + ',' + jsEvent.pageY);
        console.log('current view:' + view.name);

        this.toggleClass('selected-calendar-date');
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
    });
  }.on('didInsertElement')
});
