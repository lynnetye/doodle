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
        var month = date.format('MMMM'),
            day = date.format('DD'),
            dateObject = { month: month, day: day };

        controller.sendAction('dateSelected', dateObject)
        console.log('clicked on: ' + month + ', ' + day);
        console.log('coordinates:' + jsEvent.pageX + ',' + jsEvent.pageY);
        console.log('current view:' + view.name);

        this.toggleClass('selected-date');
      },
      defaultView: 'month',
      // eventClick: VetPronto.schedule.selectEvent,
      // events: eventList,
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
  }.on('didInsertElement'),

  createSelectedDateLabel: function (month, date) {

  }
});
