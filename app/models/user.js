import DS from 'ember-data';

export default DS.Model.extend({
  times: DS.hasMany('time', { async: true } ),
  events: DS.hasMany('event', { async: true } ),
  name: DS.attr('string')
});
