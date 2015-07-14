import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('create'); // gets the model for the /create route
  }
});
