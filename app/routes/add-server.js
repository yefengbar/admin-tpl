import Ember from 'ember';
import layer from 'layer';
import RSVP from 'rsvp';
import inject from 'ember-service/inject'
import { later } from 'ember-runloop'
export default Ember.Route.extend({
	ajax: inject(),
	model: function() {
		return new RSVP.Promise((resolve, reject) => later(() => reject({
    		status: 200,
    		message: 'this is loading test...'
		}), 5000));
	},
	actions: {
		getGids:function(params){
//			let gids = this.get('value');
//			console.log('this is route:'+gids+params)
		}
	}
});