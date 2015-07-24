import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',

  classNames: ['save-voter-button'],

  saveButtonClick: function () {
    this.sendAction('save', Ember.$('.voter-name-input').val());
  }.on('click')
});
