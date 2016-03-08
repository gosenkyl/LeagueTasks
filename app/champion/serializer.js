import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    let champions = [];

    let data = payload.data;

    Object.keys(data).forEach(function(key, index){
      let champ = data[key];

      champ.image = champ.image.full;

      //console.log(champ);

      champions.push(champ);
    });

    let deserialized = {"champions": champions};

    return this._super(store, primaryModelClass, deserialized, id, requestType);
  }


});
