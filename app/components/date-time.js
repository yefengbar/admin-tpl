import Ember from 'ember';

export default Ember.Component.extend({
  didRender: function () {
    this.set('datas',getnowDate());
    Ember.$('#data_1 .form-control').attr("value", getnowDate()).datetimepicker({
      format: 'Y-m-d H:i',
      step: 10,
      autoclose:true
    });
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
