import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveNewEvent: function () {
      var newEvent = this.get('newEvent');

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
