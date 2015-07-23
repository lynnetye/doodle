import DS from 'ember-data';

export default DS.Model.extend({
  dates: DS.hasMany('date', { async: true } ),
  users: DS.belongsTo('user'),
  ownerName: DS.attr('string'),
  ownerEmail: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string')
});
