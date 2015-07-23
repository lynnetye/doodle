import DS from 'ember-data';

export default DS.Model.extend({
  event: DS.belongsTo('event'),
  users: DS.hasMany('user', { async: true } ),
  times: DS.hasMany('time', { async: true } ),
  isAllDay: DS.attr('boolean', {defaultValue: true } ),
  startDate: DS.attr('string'),
  startMonth: DS.attr('string'),
  startDayOfWeek: DS.attr('string'),
  startDayOfMonth: DS.attr('string'),
  endDate: DS.attr('string'),
  endMonth: DS.attr('string'),
  endDayOfWeek: DS.attr('string'),
  endDayOfMonth: DS.attr('string'),
  diffInDays: DS.attr('number')
});
