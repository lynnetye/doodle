import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitDetails: function () {
      var details = {
            name: Ember.$('.details-input-name').val(),
            email: Ember.$('.details-input-email').val(),
            title: Ember.$('.details-input-title').val(),
            description: Ember.$('.details-input-description').val()
          };

      this.set('newEvent.ownerName', details.name);
      this.set('newEvent.ownerEmail', details.email);
      this.set('newEvent.title', details.title);
      this.set('newEvent.description', details.description);

      this.transitionToRoute('/create/dates');
    }
  }
});
