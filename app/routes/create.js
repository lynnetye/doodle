import Ember from 'ember';

export default Ember.Route.extend({
  currentStep: 'details',

  detailsStepCompleted: false,

  datesStepCompleted: false,

  timesStepCompleted: false,

  actions: {
    submitDetails: function (details) {
      var newEvent = this.store.createRecord('event', {
        ownerName: details.name,
        ownerEmail: details.email,
        title: details.title,
        description: details.description
      });

      newEvent.save()
        .then(function () {
          this.set('detailsStepCompleted', true);
          this.set('currentStep', 'dates');
        })
        .catch(function () {
          alert('uh oh - failed to save');
        });
      }
  }

});
