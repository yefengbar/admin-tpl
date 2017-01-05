import Ember from 'ember';
export default Ember.Route.extend({
  model: function (params) {
    // console.log(params);
    if (!params.game_id) {
      this.transitionTo('game-manager');
    }
    let model = Ember.$.post('http://web.7k7k.com/source/cms/staff_games.php?gid='+params.game_id, {"action": "games_edit"}, function (res) {
      return res;
    }, 'json');
    return model;
  },
  afterModel: function (model) {
    let _model = model;
    setTimeout(function () {
      Ember.$('#data_1 .form-control').attr("value", formatDate(_model.gamestime)).datetimepicker('update');
      // Ember.$('#data_1 .form-control').datetimepicker({
      //   format: 'Y-m-d',
      //   step: 60,
      //   autoclose: true
      // });
      Ember.$('.selectpicker').selectpicker('val', _model.dttype);
    }, 100);
    function formatDate(tpm) {
      var tpm = new Date(parseInt(tpm) * 1000).toLocaleString().replace(/上午|下午/, '');
      var now = new Date(tpm);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var date = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      if (month < 10) {month = "0" + month;}
      if (date < 10) {date = "0" + date;}
      if (hour < 10) {hour = "0" + hour;}
      if (minute < 10) {minute = "0" + minute;}
      return year + "-" + month + "-" + date + " " + hour + ":" + minute;
    }
  }
});
