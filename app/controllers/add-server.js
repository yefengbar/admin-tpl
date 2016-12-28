import Ember from 'ember';
import layer from 'layer';
export default Ember.Controller.extend({
  gid:7,
  sername: '双线1区',
  linetype:1,
  sertype:1,
  displaytype:1,
  serdata:this.getnowDate,
  tips:"稍后开启，敬请期待！！！",
  actions: {
    send: function (params) {
      if(!this.sername){
        layer.msg('区服名称不能为空！');
        return false;
      };
      if(!this.sername){
        layer.msg('区服名称不能为空！');
        return false;
      };

      console.log('------------------------------------------');
      console.log('submit.gid:' + this.get('gid'));
      console.log('submit.sername:' + this.sername);
      console.log('submit.linetype:' + this.linetype);
      console.log('submit.sertype:' + this.sertype);
      console.log('submit.displaytype:' + this.displaytype);
      console.log('submit.serdata:' + this.serdata);
      console.log('submit.tips:' + this.tips);
      console.log('------------------------------------------');
      layer.msg('正在处理...', {icon: 16,shade:0.3});
      Ember.$.post('/addServer',{gid:this.gid, sername: '"'+this.sername+'"', linetype:this.linetype, sertype:this.sertype, displaytype:this.displaytype, serdata:'"'+this.serdata+'"',tips:'"'+this.tips+'"'},doto);
      function doto(res,textStatus,jqXHR) {
        if(res.status == 1){
          layer.alert('添加成功！')
        }else{
          layer.alert('添加失败！')
        }
      }
      return false;
    },
    postGid:function (params) {
      this.set('gid',params);
      console.log('Controller.gid:' + params);
    },
    postData:function (params) {
      this.set('serdata',params);
      console.log('Controller.serdata:' + params);
    },
    ac_linetype:function (params) {
      this.set('linetype',params);
      // return true;
    },
    ac_sertype:function (params) {
      this.set('sertype',params)
    },
    ac_displaytype:function (params) {
      this.set('displaytype',params)
    }
  },
  getnowDate:function  () {
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

