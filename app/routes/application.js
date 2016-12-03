import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [{
      "name": "更新管理",
      "url": "",
      "icon": "fa-repeat",
      "list": [{"name": "游戏管理", "url": "index", "icon": "fa-gamepad"}, {
        "name": "游戏管理",
        "url": "index",
        "icon": "fa-gamepad"
      }]
    },
      {"name": "游戏管理", "url": "index", "icon": "fa-gamepad"},
      {"name": "平台管理·旧", "url": "index", "icon": "fa-tachometer"},
      {"name": "官网管理", "url": "index", "icon": "fa-home"},
      {"name": "页游平台管理", "url": "index", "icon": "fa-globe"},
      {"name": "定制官网更新", "url": "index", "icon": "fa-gift"},
      {"name": "充值管理", "url": "index", "icon": "fa-credit-card"},
      {"name": "统计管理", "url": "index", "icon": "fa-bar-chart-o"},
      {"name": "物料管理", "url": "index", "icon": "fa-archive"},
      {"name": "新版物料", "url": "index", "icon": "fa-archive"},
      {"name": "广告管理", "url": "index", "icon": "fa-lightbulb-o"},
      {"name": "媒体管理", "url": "index", "icon": "fa-microphone"},
      {"name": "历史数据查询", "url": "index", "icon": "fa-history"},
      {"name": "活动配置", "url": "index", "icon": "fa-puzzle-piece"},
      {"name": "页游虚拟充值", "url": "index", "icon": "fa-money"},
      {"name": "补链管理", "url": "index", "icon": "fa-chain-broken"},
      {"name": "扶持号管理", "url": "index", "icon": "fa-wheelchair"}];
  },
  actions: {
    showUi: function (str) {
      //this.transitionTo(str);
      console.log()
      //$('#side-menu li').addClass('')
    }
  }
});
$('body').append('<script src="static/js/bootstrap.min.js?v=3.4.0"></script>');
$('body').append('<script src="static/js/hplus.js?v=2.2.0"></script>')
