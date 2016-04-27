import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    let top = this.store.query("champion", { userChampion: 200, });

    return {
      top: top
    }
  }

});
