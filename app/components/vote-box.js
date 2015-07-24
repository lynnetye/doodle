import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  classNames: ['vote-box'],

  yesVote: function () {
    return false;
  }.observes('clickedBox'),

  clickedBox: function () {
    if (this.get('user.dates').findBy('id', this.get('date.id'))) {
      // console.log('removeObject');
      this.get('user.dates').removeObject(this.get('date'));
    } else {
      // console.log('addObject');
      this.get('user.dates').addObject(this.get('date'));
    }
  }.on('click')
});
