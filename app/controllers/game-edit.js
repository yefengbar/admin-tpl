import Ember from 'ember';
import layer from 'layer';
export default Ember.Controller.extend({
  actions: {
    send: function (params) {
      if (!this.sername) {
        layer.msg('游戏信息不能为空！');
        // return false;
      }
      ;

      console.log('------------------------------------------');
      console.log('submit.data:' + Ember.$('#form').serializeArray());
      console.log('------------------------------------------');
      // layer.msg('正在处理...', {icon: 16,shade:0.3});
      // Ember.$.post('/addServer',{"data":1},doto);
      function doto(res, textStatus, jqXHR) {
        if (res.status == 1) {
          layer.alert('添加成功！')
        } else {
          layer.alert('添加失败！')
        }
      }

      return false;
    },
    g_dttype: function (params) {
      // this.set('gameid',params);
      console.log('Controller.dttype:' + params);
    },
    postData: function (params) {
      this.set('serdata', params);
      console.log('Controller.serdata:' + params);
    },
    setRadioVal: function (dom, params) {
      this.set(dom, params);
    }

  }
});

