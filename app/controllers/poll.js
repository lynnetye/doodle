import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['startDate:asc'],

  sortedDates: Ember.computed.sort('event.dates.@each.startDate', 'datesSortRules'),

  actions: {
    createNewUser: function (name) {
      this.store.createRecord('user', {
        name: name
      });
    }
  }
});
