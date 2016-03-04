import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    let champions = [];

    let data = payload.data;

    Object.keys(data).forEach(function(key){
      let champ = data[key];
      champions.push(champ);
    });

    let deserialized = {"champions": champions};

    return this._super(store, primaryModelClass, deserialized, id, requestType);
  }


});
