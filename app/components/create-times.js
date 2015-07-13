import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-times'],

  isVisible: function () {
    return this.get('currentStep') === 'times';
  }

});
