import Ember from 'ember';

export default Ember.Controller.extend({
  datesSortRules: ['startDate:asc'],

  sortedDates: Ember.computed.sort('event.dates.@each.startDate', 'datesSortRules'),

  actions: {
    saveUserVotes: function (name) {
      var event = this.get('event'),
        voter = this.get('voter'),
        dates = voter.get('dates'),
        controller = this;

      voter.set('name', name);
      voter.get('eventsPolled').addObject(event);
      voter.save()
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
