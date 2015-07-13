import Ember from 'ember';

export default Ember.Controller.extend({
  classNames: ['create'],

  currentStep: 'details',

  activeStepTracker: [ 'detailsStepActive',
                       'datesStepActive',
                       'timesStepActive',
                       'extrasStepActive' ],

  detailsStepActive: true,

  datesStepActive: false,

  timesStepActive: false,

  extrasStepActive: false,

  updateActiveStep: function () {
    var currentStep = this.get('currentStep'),
        stepsList = this.get('activeStepTracker');

    for (var i = 0; i < stepsList.length; i++) {
      this.set(stepsList[i], false);
    }

    switch (currentStep) {
      case 'details':
        this.set('detailsStepActive', true);
        break;
      case 'dates':
        this.set('datesStepActive', true);
        break;
      case 'times':
        this.set('timesStepActive', true);
        break;
      case 'extras':
        this.set('extrasStepActive', true);
        break;
    }
  }.property('currentStep'),

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
          this.set('currentStep', 'dates');
        })
        .catch(function () {
          alert('uh oh - failed to save');
        });
      }
  }
});
