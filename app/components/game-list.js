import Ember from 'ember';

export default Ember.Component.extend({
	willRender() {
    this.set('gamelist', window.allgames);
	},
  didRender: function () {
    Ember.$('.selectpicker').selectpicker({
      //style: 'btn-info',
      //size: 'auto',
      //width:'auto',
    });
  },
	gid:0,
	actions:{
		getGid:function(params){
			console.log('this.gid is:'+params);
			this.set('gid',params);

    }
	}
});

