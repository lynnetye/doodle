import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.belongsTo('date'),
  votes: DS.hasMany('vote', { async: true } ),
  start: DS.attr('string'),
  end: DS.attr('string')
});
