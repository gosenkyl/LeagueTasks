import LeagueTasksAdapter from '../leaguetasks/adapter';

export default LeagueTasksAdapter.extend({

  pathForType: function(){
    return "users/200/champs";
  },


  urlForFindRecord: function(id, modelName, snapshot){
    return this.get("host") + "/" + this.get("namespace") + "/users/200/champs/" + id;
  }

});
