import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  /*attrs:{
    userChampion: {key: "userChampionId"}
  }*/

  /*,

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    let champions = [];

    let data = payload.data;

    Object.keys(data).forEach(function(key){
      let champ = data[key];

      champ.userChampionId = champ.id;

      champ.image = champ.image.full;

      champ.difficulty = champ.info.difficulty;

      //console.log(champ);

      champions.push(champ);
    });

    payload = {"champions": champions};

    return this._super(store, primaryModelClass, payload, id, requestType);
  }*/


});
