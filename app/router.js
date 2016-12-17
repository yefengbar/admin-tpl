import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  willTransition() {
    this._super(...arguments
  )
    ;
    performance.mark('willTransition');
  },

  didTransition() {
    this._super(...arguments
  )
    ;
    performance.mark('didTransition');
  },
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about');
  this.route('news');
  this.route('new', {path: 'news/:new_id'});
  this.route('add-server');
  // this.route('addServer');
  // this.route('add_server_loading');
});

export default Router;
