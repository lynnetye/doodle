import DS from 'ember-data';

export default DS.Model.extend({
  ownerName: DS.attr('string'),
  ownerEmail: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string')
});
