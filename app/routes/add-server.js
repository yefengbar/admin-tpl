import Ember from 'ember';
import layer from 'layer';
import RSVP from 'rsvp';
import inject from 'ember-service/inject';
import {later} from 'ember-runloop';
export default Ember.Route.extend({
  // ajax: inject(),
	model: function() {
    // return new RSVP.Promise((resolve, reject) => later(() => reject({
    // status: 200,
    // message: 'this is loading test...'
    // }), 5000));
    return {gid:"",sername:"1",linetype:1,sertype:0,displaytype:0,serdata:"",tips:""};
	},
	actions: {
    // postGids:function(params){
		// 	console.log('this is route:'+params)
		// }
  },
  afterModel: function () {
    setTimeout(function () {
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
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes();
        // + seperator2 + date.getSeconds();
        return currentdate;
      }
    }, 100)

  }
});
