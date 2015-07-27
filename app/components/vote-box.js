import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  classNames: ['vote-box'],

  yesVote: function () {
    return this.get('voter.dates').findBy('id', this.get('date.id'));

  }.property('voter.dates.[]'),

  clickedBox: function () {
    if (this.get('voter.dates').findBy('id', this.get('date.id'))) {
      this.get('voter.dates').removeObject(this.get('date'));
    } else {
      this.get('voter.dates').addObject(this.get('date'));
    }
  }.on('click')
});
