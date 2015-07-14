import Ember from 'ember';

export default Ember.Controller.extend({
  classNames: ['create'],

  currentStep: 'details',

  possibleSteps: [ 'detailsStepActive',
                   'datesStepActive',
                   'timesStepActive',
                   'extrasStepActive' ],

  detailsStepActive: true,

  datesStepActive: false,

  timesStepActive: false,

  extrasStepActive: false,

  updateActiveStep: function () {
    var currentStep = this.get('currentStep'),
        possibleSteps = this.get('possibleSteps');

    for (var i = 0; i < possibleSteps.length; i++) {
      this.set(possibleSteps[i], false);
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
  }.observes('currentStep'),

  actions: {
  }
});
