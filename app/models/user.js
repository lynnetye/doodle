import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  eventsOwned: DS.hasMany('event', {
    async: true,
    inverse: 'owner' }),
  eventsPolled: DS.hasMany('event', {
    async: true,
    inverse: 'voters' }),
  times: DS.hasMany('time', {
    async: true,
    inverse: 'voters' }),
  dates: DS.hasMany('date', {
    async: true,
    inverse: 'voters' })
});
