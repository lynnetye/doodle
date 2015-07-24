import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return {
      events: this.store.findAll('event'),
      user: this.store.createRecord('user')
    };
  },

  setupController: function (controller, model) {
    controller.set('events', model.events);
    controller.set('user', model.user);
  }
});
