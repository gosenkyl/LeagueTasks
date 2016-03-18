import Ember from 'ember';

let {
  computed
  } = Ember;

export default Ember.Component.extend({

  content: null,
  isDragable: true,

  dragStart: function(event){
    event.dataTransfer.setData('text/data', this.get('content.id'));
  },

  difficultColor: computed(function(){
    let difficulty = this.get('content.difficulty');

    if(difficulty > 7){
      return "hard";
    } else if(difficulty > 4 && difficulty <= 7){
      return "medium";
    } else {
      return "easy";
    }
  })

});
