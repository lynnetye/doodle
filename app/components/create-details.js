import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-details'],

  test: function () {
  }.on('didInsertElement'),

  actions: {
    submit: function (details) {
      this.sendAction('submit', details);
    }
  }
});
