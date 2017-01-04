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
      let ftime = getDate(_model.gamestime);
      Ember.$('#data_1 .form-control').attr("value", ftime).datetimepicker({
        format: 'Y-m-d',
        step: 60,
        autoclose: true
      });
      function getDate(tm){
        var tt=new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月|日|上午|下午/g, "").replace(/\//g, "-");
        return tt;
      };
      let dttype_arr = (["角色扮演","战争策略","休闲竞技","其他类型"].indexOf("\'"+_model.dttype+"\'"))+1;
      Ember.$('.selectpicker').selectpicker('val', dttype_arr);
    }, 100)
  }
});
