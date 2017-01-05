import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    let gamelists = Ember.$.post('http://web.7k7k.com/source/api/games.php', {"action": "games_list"}, function (res) {
      return res;
    }, 'json');
    return eval(gamelists);
  },
  afterModel: function (model, transition) {
    setTimeout(function () {
      let table = Ember.$('.dataTables').DataTable({
        "lengthChange": true,
        "lengthMenu": [[15, 50, 100, -1], [15, 50, 100, "全部"]],
        "processing": true,
        "orderClasses": true
      });
      table.page.len(15).draw();
    }, 100);

  }
});
