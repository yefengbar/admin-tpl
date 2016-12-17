import Ember from 'ember';
import layer from 'layer';

export default Ember.Route.extend({
	
	model: function() {
		return 'qwe';
	},
	
	actions: {
		getGids:function(params){
//			let gids = this.get('value');
//			console.log('this is route:'+gids+params)
		}
	}
});