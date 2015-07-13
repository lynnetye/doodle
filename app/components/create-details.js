import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-details'],

  test: function () {
    debugger;
  }.on('didInsertElement'),

  isVisible: function () {
    return this.get('currentStep') === 'details';
  },

  actions: {
    submit: function (details) {
      this.sendAction('submit', details);
    }
  }
});
