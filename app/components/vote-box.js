import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  classNames: ['vote-box'],

  clickedBox: function () {
    this.sendAction('click', this.get('date'));
  }.on('click')
});
