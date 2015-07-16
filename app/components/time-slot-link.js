import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',

  classNames: ['create-time-slot-link'],

  displayTimeSelector: function () {
    this.sendAction('click');
  }.on('click')
});
