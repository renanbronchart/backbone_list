var ns = ns || {};

(function( ns ) {
  ns.models = ns.models || {};

  ns.models.MusiciansModel = Backbone.Model.extend({
    defaults :
    {
      first_name: "",
      last_name: ""
    }
  });

  ns.models.MusiciansCollection = Backbone.Collection.extend({
    model : ns.models.MusiciansModel
  });
})( ns );
