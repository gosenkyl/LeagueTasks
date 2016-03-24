import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  attrs: {

    champion: {key: "championId"}

  },


  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    payload.role = payload.role.id;

    payload = {"user-champion": payload};

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
