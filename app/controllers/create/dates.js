import Ember from 'ember';

export default Ember.Controller.extend({
  classNames: ['create-dates'],

  actions: {
    submitDates: function () {
      var newEvent = this.get('newEvent');

      this.set(newEvent.dates, 'today');
    }
  }
});
