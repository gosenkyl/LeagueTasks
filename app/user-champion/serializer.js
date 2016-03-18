import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  attrs: {

    champion: {key: "championId"}

  },


  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    console.log('normalizeResponse');

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
