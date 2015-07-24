import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('event');
  },

  setupController: function (controller, model) {
    controller.set('event', model);
    controller.set('user', this.store.createRecord('user'));
  },

  deactivate: function () {
    var user = this.get('controller.user');

    if (user.get('isNew')) {
      user.deleteRecord();
    }
  }
});
