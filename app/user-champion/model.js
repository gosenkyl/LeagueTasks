import DS from 'ember-data';

export default DS.Model.extend({

  champion: DS.belongsTo('champion'),
  role: DS.belongsTo('role')

});
