import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  times: DS.hasMany('time'),
  startDate: DS.attr('date'),
  startMonth: DS.attr('string'),
  startDayOfWeek: DS.attr('string'),
  startDayOfMonth: DS.attr('string'),
  endDate: DS.attr('date'),
  endMonth: DS.attr('string'),
  endDayOfWeek: DS.attr('string'),
  endDayOfMonth: DS.attr('string'),
  diffInDays: DS.attr('number')
});
