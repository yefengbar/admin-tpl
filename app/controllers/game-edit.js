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
    postGid: function (params) {
      // this.set('gameid',params);
      console.log('Controller.gid:' + params);
    },
    postData: function (params) {
      this.set('serdata', params);
      console.log('Controller.serdata:' + params);
    },
    setRadioVal: function (dom, params) {
      this.set(dom, params);
    }

  },
  getnowDate: function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (hh >= 0 && hh <= 9) {
      hh = "0" + hh;
    }
    if (mm >= 0 && mm <= 9) {
      mm = "0" + mm;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + hh + seperator2 + mm;
    // + seperator2 + date.getSeconds();
    return currentdate;
  }
});

