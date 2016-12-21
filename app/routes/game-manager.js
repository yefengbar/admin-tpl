import Ember from 'ember';

export default Ember.Route.extend({
  afterModel:function (posts, transition) {
    setTimeout(function () {
      let table = Ember.$('.dataTables').DataTable({
        "lengthChange": true,
        "lengthMenu": [ [25, 50,100, -1], [ 25, 50,100, "全部"] ],
        "processing": true,
        "orderClasses": true
      });
      // table.page.len( -1 ).draw();
      table.page.len( 25 ).draw();
    },100);

  }
});
