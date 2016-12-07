var ns = ns || {};

(function(ns) {
  ns.views = ns.views || {};

  ns.views.MusicianView = Backbone.View.extend({
    tagName: 'li'
  });

  ns.views.MusicianListView = Backbone.View.extend({
    collection: null,
    template: _.template( $('#template-musicians').html() ),
    initialize: function () {
      this.listenTo(this.collection, 'add', this.render);
      this.render();
    },
    render: function () {
      var self = this;

      self.$el.empty();
      this.collection.each(function (musician) {
        self.$el.append( self.template(musician.toJSON()) );
      })
    }
  })
})(ns);
