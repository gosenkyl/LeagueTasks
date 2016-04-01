import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: true,

  attrs: {
    champion: {key: "championId"},
    role: {key: "roleId"}
  },


  /*modelNameFromPayloadKey: function(key){
    return this._super("user-champion");
  },*/

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){

    //payload.role = payload.role.id;

    /*let userChampArr = Ember.A();

    payload.forEach((item)=>{
      userChampArr.addObject({"user-champion": item });
    });

    payload = {"user-champions": userChampArr};*/

    return this._super(store, primaryModelClass, payload, id, requestType);
  }


});
