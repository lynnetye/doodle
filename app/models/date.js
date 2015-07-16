import DS from 'ember-data';

export default DS.Model.extend({
  fullDate: DS.attr('date'),
  month: DS.attr('string'),
  weekDay: DS.attr('string'),
  monthDay: DS.attr('string'),
  event: DS.belongsTo('event'),
  times: DS.hasMany('time')
});
