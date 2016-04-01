import DS from 'ember-data';

export default DS.Model.extend({

  description: DS.attr('string'),
  lane: DS.attr('string')//,

  //userChampion: DS.belongsTo('user-champion')

});
