import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  classNames: ['poll-table-user-vote'],

  actions: {
    addNewVoter: function (inputValue) {
      this.sendAction('createNewVoter', inputValue);
    }
  }
});
