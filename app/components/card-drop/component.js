import Ember from 'ember';

export default Ember.Component.extend({

  content: null,

  dragOver: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    var id = event.dataTransfer.getData('text/data');

    console.log(id);

    if(this.attrs.onDropCard){
      this.attrs.onDropCard(id);
    }
  }

});
