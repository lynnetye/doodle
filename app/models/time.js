import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.belongsTo('date'),
  voters: DS.hasMany('user', { async: true }),
  start: DS.attr('string'),
  end: DS.attr('string')
});
