import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user', { inverse: 'eventsOwned' }),
  voters: DS.hasMany('user', {
    async: true,
    inverse: 'eventsPolled' }),
  dates: DS.hasMany('date', { async: true }),
  title: DS.attr('string'),
  description: DS.attr('string'),
  ownerName: DS.attr('string'),
  ownerEmail: DS.attr('string')
});
