var ns = ns || {};

(function( ns ) {
  ns.models = ns.models || {};

  ns.models.MusiciansModel = Backbone.Model.extend({
    // Add patern of this model
    defaults :
    {
      first_name: "",
      last_name: ""
    }
  });

  ns.models.MusiciansCollection = Backbone.Collection.extend({
    // Add model in this collection
    model : ns.models.MusiciansModel
  });
})( ns );
