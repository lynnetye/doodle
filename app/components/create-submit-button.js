import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['create-submit-button'],

  clickSubmitDetails: function () {
    var details = {
      name: $('.details-input-name').val(),
      email: $('.details-input-email').val(),
      title: $('.details-input-title').val(),
      description: $('.details-input-description').val()
    }

    this.sendAction('submit', details);
  }.on('click')
});
