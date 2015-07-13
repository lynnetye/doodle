import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-extras'],

  isVisible: function () {
    return this.get('currentStep') === 'extras';
  }

});
