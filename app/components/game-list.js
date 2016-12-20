import Ember from 'ember';

export default Ember.Component.extend({
	willRender() {
    this.set('gamelist', window.allgames);
	},
  didRender: function () {
    Ember.$('.selectpicker').selectpicker();
  },
	gid:0,
	actions:{
		getGid:function(params){
			console.log('Component.gid:'+params);
			this.set('gid',params);
      this.sendAction('postGids',params);
			return true;
    }
	}
});

