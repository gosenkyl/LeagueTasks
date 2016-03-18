import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

debugger;

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
