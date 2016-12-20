import Ember from 'ember';

export default Ember.Component.extend({
  didRender: function () {
    this.set('datas',getnowDate());
    Ember.$('#data_1 .form-control').datetimepicker({
      format: 'Y-m-d H:i',
      step: 10,
      autoclose:true
    });
    function getnowDate () {
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
    };
    this.sendAction('postDatas',getnowDate());
  },
  datas:0,
  actions:{
    getData:function(params){
      let data = params || this.datas;
      console.log('Component.data:'+data);
      this.set('datas',params);
      this.sendAction('postDatas',data);
      return true;
    }
  }
});
