import DS from 'ember-data';

export default DS.Model.extend({

  version: DS.attr('string'),
  key: DS.attr('string'),
  name: DS.attr('string'),
  title: DS.attr('string'),
  blurb: DS.attr('string'),
  difficulty: DS.attr('string'),
  image: DS.attr('string'),

  //tags: DS.attr('string'),
  partype: DS.attr('string'),
  //stats: DS.attr('string')

});
