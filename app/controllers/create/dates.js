import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['id:desc'],
  sortedDates: Ember.computed.sort('newEvent.dates.@each.id', 'datesSortRules'),

  actions: {
    submitDates: function () {
      this.transitionToRoute('/create/times');
    },

    storeSelectedDate: function (date) {
      this.store.createRecord('date', {
        month: date.month,
        day: date.day,
        event: this.get('newEvent')
      });
    }
  }
});
