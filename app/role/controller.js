import Ember from 'ember';

export default Ember.Controller.extend({

  content: null,
  role: null,

  actions: {

    onDropCard: function(id){

      this.store.findRecord('champion', id).then(
        (champion)=>{
          console.log(champion);
          this.store.unloadRecord(champion);
      });

    }

  }


});
