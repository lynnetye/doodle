import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  classNames: ['vote-box'],

  clickedBox: function () {
    this.sendAction('click');
  }.on('click')
});
