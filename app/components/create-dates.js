import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['create-dates'],

  isVisible: function () {
    return this.get('currentStep') === 'dates';
  }

});
