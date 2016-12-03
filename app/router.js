import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('about');
  this.route('news');
  this.route('new', {path: 'news/:new_id'});
  this.route('add_server');
  this.route('addServer');
});

export default Router;
