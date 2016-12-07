var ns = ns || {};

(function($, ns) {
  var musicians;

  $(function() {
    var main = function() {
      // Instance of new Collection
      musicians = new ns.models.MusiciansCollection();

      // remove the message for waiting.
      $('#waiting').remove();

      // Instance of new list with the collection musician
      musiciansList = new ns.view.MusiciansListView({
        el: '#musicians-list',
        collection: musicians
      });

      // Add new musician in list of musicians with adding a new instance of musicianModel
      musicians.add(new ns.models.MusiciansModel({id:1, first_name:'Maurice', last_name:'Andre'}));
      musicians.add(new ns.models.MusiciansModel({id:2, first_name:'Louis', last_name:'Amstrong'}));
      musicians.add(new ns.models.MusiciansModel({id:3, first_name:'Eric', last_name:'Aubier'}));
      musicians.add(new ns.models.MusiciansModel({id:4, first_name:'Miles', last_name:'Davis'}));
      musicians.add(new ns.models.MusiciansModel({id:5, first_name:'Arturo', last_name:'Sandoval'}));
      musicians.add(new ns.models.MusiciansModel({id:6, first_name:'James', last_name:'Morrison'}));
    }

    $('body').append('<h1 id="waiting">Merci de Patienter un moment</h1>');

    setTimeout(main, 3000);
  });

})(jQuery, ns);
