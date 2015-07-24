import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('event');
  },

  setupController: function (controller, model) {
    controller.set('events', model);
  }
});
