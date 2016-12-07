var ns = ns || {};

(function(ns) {
  ns.view = ns.view || {};

  ns.view.MusiciansView = Backbone.View.extend({
    tagName: 'li',
    model: null,
    // Save in this.template the template contain.
    template: _.template( $('#template-musicians').html() ),
    initialize: function () {
      // listen when this.model change and run render.
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function () {
      // Add in this view the template with good params.
      this.$el.html( this.template(this.model.toJSON() ));
      return this; // Send this with good $el to list of musicians
    }
  });

  ns.view.MusiciansListView = Backbone.View.extend({
    collection: null,
    initialize: function () {
      // listening when add model in collection(cf main.js)
      this.listenTo(this.collection, 'add', this.addMusician);
    },
    addMusician: function(musician) {
      // new intance of musiciansView with model is Element was just adding in collection.
      var musicianView = new ns.view.MusiciansView({
        model: musician
      });

      // Add in DOM the template of MusicianView
      this.$el.append(musicianView.el);
      console.log(musicianView.el);
    }
  });
})(ns);
