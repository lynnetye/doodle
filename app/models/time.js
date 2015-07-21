import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.belongsTo('date'),
  start: DS.attr('string'),
  end: DS.attr('string')
});
