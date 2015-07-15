import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    this.transitionTo('create.details');
  },

  model: function () {
    return this.store.createRecord('event');
  }
});
