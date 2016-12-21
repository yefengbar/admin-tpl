import Ember from 'ember';
import RSVP from 'rsvp';
import inject from 'ember-service/inject';
import { isNone } from 'ember-utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
   import layer from 'layer';
import { later } from 'ember-runloop';

export default Ember.Route.extend({
	ajax: inject(),
	isLogin:false,
	beforeModel(transition) {
		this._super(...arguments);
//	return new RSVP.Promise((resolve) => later(() => resolve(), 1000));
		if(getCookie("isLogin") == "false" || getCookie("isLogin") == undefined ){
			let self = this;
			layer.msg('您未登录，请先登录！');
			
			Ember.run.later(transition, function() {
				window.location.href="/login.html";
			}, 1000);
			transition.abort();
		}else{
			this.set('isLogin',true);
//			transition.retry()
		}
		function setCookie(name,value){
			var Days = 1;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		}
		function getCookie(name){
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg))
			return unescape(arr[2]);
			else
			return null;
		}
	 },
  model: function () {
    return RSVP.hash({
      base: [{
        "name": "更新管理",
        "url": "",
        "icon": "fa-repeat",
        "list": [{"name": "系统缓存", "url": "news"},
          {"name": "后台缓存", "url": "about"}]
      },
        {
          "name": "游戏管理", "url": "", "icon": "fa-gamepad",
          "list": [{"name": "添加区服", "url": "add-server"},
            {"name": "添加游戏", "url": "index"},
            {"name": "游戏管理", "url": "game-manager"}]
        },
        {
          "name": "平台管理·旧", "url": "", "icon": "fa-tachometer",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "官网管理", "url": "", "icon": "fa-home",
          "list": [{"name": "官网SEO设置", "url": "news"},
            {"name": "v0.5版v1版官网顶部推荐", "url": "news"},
            {"name": "v0.5版右侧官网推荐", "url": "news"},
            {"name": "官网漂浮", "url": "news"},
            {"name": "老游戏幻灯片添加", "url": "news"},
            {"name": "老游戏幻灯片管理", "url": "news"},
            {"name": "游戏官网v2版", "url": "news"},
            {"name": "游戏官网v3版", "url": "news"},
            {"name": "游戏官网v4版", "url": "news"},
            {"name": "游戏官网v5版", "url": "news"},
            {"name": "社区官网V1版", "url": "news"},
            {"name": "社区官网V2版", "url": "news"},
            {"name": "游戏官网幻灯片添加", "url": "news"},
            {"name": "游戏官网幻灯片管理", "url": "news"},
            {"name": "新手卡管理", "url": "news"},
            {"name": "新手卡添加", "url": "news"},
            {"name": "新手卡导入", "url": "news"},
            {"name": "新游戏页面管理", "url": "news"},
            {"name": "更多游戏管理", "url": "news"}]
        },
        {
          "name": "页游平台管理", "url": "index", "icon": "fa-globe",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "定制官网更新", "url": "index", "icon": "fa-gift",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "充值管理", "url": "index", "icon": "fa-credit-card",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "统计管理", "url": "index", "icon": "fa-bar-chart-o",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "物料管理", "url": "index", "icon": "fa-archive",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "新版物料", "url": "index", "icon": "fa-archive",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "广告管理", "url": "index", "icon": "fa-lightbulb-o",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "媒体管理", "url": "index", "icon": "fa-microphone",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "历史数据查询", "url": "index", "icon": "fa-history",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "活动配置", "url": "index", "icon": "fa-puzzle-piece",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "页游虚拟充值", "url": "index", "icon": "fa-money",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "补链管理", "url": "index", "icon": "fa-chain-broken",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        },
        {
          "name": "扶持号管理", "url": "index", "icon": "fa-wheelchair",
          "list": [{"name": "社区物料推荐排序", "url": "news"}]
        }],
      ser: [{
        "name": "客服工具", "url": "index", "icon": "fa-chain-broken",
        "list": [{"name": "客服工具", "url": "news"}]
      }, {
        "name": "用户信息", "url": "index", "icon": "fa-chain-broken",
        "list": [{"name": "客服工具", "url": "news"}]
      }]
    });
  },
  actions: {
    showUi: function (type) {
      //this.transitionTo(str);
      Ember.$('#side-menu .nav_' + type).toggleClass('hidden');
    },
    logout:function(){
    	setCookie('isLogin','false');
    	function setCookie(name,value){
			var Days = 1;
			var exp = new Date();
			exp.setTime(exp.getTime() + Days*24*60*60*1000);
			document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		}
    	window.location.href="/login.html";
    }
  },
  afterModel() {
    Ember.$('body').append('<script src="static/js/hplus.js?v=2.2.0"></script>');
  }
});
