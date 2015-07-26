import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['startDate:asc'],

  sortedDates: Ember.computed.sort('event.dates.@each.startDate', 'datesSortRules'),

  actions: {
    saveUserVotes: function (name) {
      var user = this.get('user'),
        dates = user.get('dates'),
        controller = this;

      user.set('name', name).save()
        .then(function () {
          var promises = [];

          dates.forEach(function (date) {
            promises.push(date.save());
          });

          return Ember.RSVP.all(promises);
        });
    }
  }
});
