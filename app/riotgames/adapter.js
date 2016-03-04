import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: "http://ddragon.leagueoflegends.com",
  namespace: "cdn/6.4.2/data/en_US/"

});
