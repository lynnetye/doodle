import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      event: this.modelFor('event'),
      user: this.store.createRecord('user')
    }
  },

  setupController: function (controller, model) {
    controller.set('event', model.event);
    controller.set('user', model.user);
  }
});
