import DS from 'ember-data';

export default DS.Model.extend({

  role: DS.attr('string'),

  champion: DS.belongsTo('champion'/*, {inverse: 'user-champion'}*/)

});
