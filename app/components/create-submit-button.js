import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['create-submit-button'],

  clickSubmit: function () {
    this.sendAction('submit');
  }.on('click')
});
