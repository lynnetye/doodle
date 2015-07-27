import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('event');
  },

  setupController: function (controller, model) {
    controller.set('event', model);
    controller.set('voter', this.store.createRecord('user'));
    controller.set('previousVoters', model.get('voters'));
  },

  deactivate: function () {
    var user = this.get('controller.voter');

    if (user.get('isNew')) {
      user.deleteRecord();
    }
  }
});
