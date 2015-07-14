import Ember from 'ember';

export default Ember.Controller.extend({
  classNames: ['create-details'],

  actions: {
    submitDetails: function () {
      var details = {
            name: $('.details-input-name').val(),
            email: $('.details-input-email').val(),
            title: $('.details-input-title').val(),
            description: $('.details-input-description').val()
          },
          newEvent = this.get('newEvent');

      this.set('newEvent.ownerName', details.name);
      this.set('newEvent.ownerEmail', details.email);
      this.set('newEvent.title', details.title);
      this.set('newEvent.description', details.description);

      this.transitionToRoute('/create/dates');
    }
  }
});
