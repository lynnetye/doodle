import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  classNames: ['poll-table-user-vote'],

  yesVote: function () {
    return
  },

  actions: {
    addNewVoter: function (inputValue) {
      this.sendAction('createNewVoter', inputValue);
    },

    vote: function (date) {
      debugger;
    }
  }
});
