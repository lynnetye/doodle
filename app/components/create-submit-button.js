import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['create-submit-button'],

  clickSubmit: function () {
    this.sendAction('submit');
  }.on('click')

  // clickSubmit: function () {
  //   var submitStep = this.get('submit');

  //   switch (submitStep) {
  //     case 'submitDetails':

  //       break;
  //     case 'submitDates':
  //       break;
  //     case 'submitTimes':
  //       break;
  //     case 'submitExtras':
  //       break;
  //   }
  // }.on('click')
});
