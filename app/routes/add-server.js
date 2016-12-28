import Ember from 'ember';
import layer from 'layer';
import RSVP from 'rsvp';
import inject from 'ember-service/inject';
import {later} from 'ember-runloop';
export default Ember.Route.extend({
  // ajax: inject(),
	model: function() {
    // return new RSVP.Promise((resolve) => later(() => resolve(), 2000));
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
    }, 100)

  }
});
