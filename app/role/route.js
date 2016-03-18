import Ember from 'ember';

export default Ember.Route.extend({

  role: null,

  model: function(params) {
    this.set("role", params.role);

    return{
      availableList: this.store.findAll("champion"),
      selectedList: Ember.A()
    };
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('role', this.get('role'));
    controller.set('content', model);
  }

});
