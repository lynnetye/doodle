import Ember from 'ember';

export default Ember.Controller.extend({
  classNames: ['create-extras'],

  actions: {
    saveNewEvent: function () {
      newEvent.save()
        .then(function () {
          controller.transitionToRoute('/create/dates');
        })
        .catch(function () {
          alert('uh oh - failed to save');
        });
      }
  }
});
