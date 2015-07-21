import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return Ember.$.getJSON('/poll/' + params.event_id);
  },

  setupController: function (controller, model) {
    controller.set('event', model);
  }
});
