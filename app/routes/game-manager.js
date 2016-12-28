import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    let gamelists = [];
    for (var i = 1; i <= 158; i++) {
      gamelists.push({
        "id": i,
        "key": "lycq",
        "gname": "传奇盛世",
        "gtype": "热血传奇",
        "newser": "04-27",
        "status": 0,
        "display": "1"
      });
    }
    // console.log(gamelists[0]);
    return gamelists;
  },
  afterModel:function (posts, transition) {
    setTimeout(function () {
      let table = Ember.$('.dataTables').DataTable({
        "lengthChange": true,
        "lengthMenu": [[15, 50, 100, -1], [15, 50, 100, "全部"]],
        "processing": true,
        "orderClasses": true
      });
      table.page.len(15).draw();
    },100);

  }
});
