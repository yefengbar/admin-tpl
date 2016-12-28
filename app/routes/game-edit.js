import Ember from 'ember';
export default Ember.Route.extend({
  model: function (params) {
    // console.log(params);
    if (!params.game_id) {
      this.transitionTo('game-manager');
    }
    let model = {
      gname: "传奇盛世",
      key: "",
      pinyin: "",
      convert: "",
      unit: "",
      gameid: "496",
      tjurl2: "",
      tjurl3: "",
      linkurl1: "",
      gametitle: "",
      linkurl2: "",
      gametype: 1,
      newsfid: "",
      infofid: "",
      gongluefid: "",
      bgcolor: "",
      wlcolor: "",
      plid: "",
      dttype: 3,
      gamestate: "",
      gamestar: "",
      qqgroup: "",
      siteurl: "",
      xinshou: "",
      about: "",
      gogame: "",
      gamebbs: "",
      newcodeurl: "",
      gamesinfo: "",
      gamessort: "",
      gamestime: "",
      codecontent: "",
      codeuse: "",
      gtype: "1",
      codeshow: 1,
      tuijian: "",
      tuijian2: "",
      gamestatus: "",
      isshow: "",
      ispay: "",
      iswebtuijian: ""
    };
    return model;
    // Ember.$.post('http://www.yefengbar.com/post.php',params,doto);
    function doto(res, textStatus, jqXHR) {
      if (res.status == 1) {
        layer.alert('添加成功！')
      } else {
        // layer.alert('添加失败！')
      }
    }
  },
  afterModel: function (model) {
    let _model = model;
    setTimeout(function () {
      Ember.$('#data_1 .form-control').attr("value", getnowDate()).datetimepicker({
        format: 'Y-m-d H:i',
        step: 60,
        autoclose: true
      });
      Ember.$('.selectpicker').selectpicker('val', _model.dttype);
    }, 100)
  }
});
