import DS from 'ember-data';

export default DS.Model.extend({
  month: DS.attr('string'),
  day: DS.attr('string'),
  event: DS.belongsTo('event')
});
