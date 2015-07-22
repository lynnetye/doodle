import Ember from 'ember';

export default Ember.Component.extend({
  voteBoxSwitch: true,

  actions: {
    toggleVoteBox: function () {
      if (this.get('voteBoxSwitch')) {
        this.set('voteBoxSwitch', false);
      } else {
        this.set('voteBoxSwitch', true);
      }
    }
  }
});
