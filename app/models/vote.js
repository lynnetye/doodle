import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.belongsTo('time')
});
