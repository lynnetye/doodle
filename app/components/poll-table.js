import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['poll-table'],

  tagName: 'table',

  actions: {
    createNewVoter: function (name) {
      this.sendAction('createNewUser', name);
    },

    save: function (name) {
      this.sendAction('saveVotes', name);
    }
  }
});
