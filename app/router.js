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
  this.route('add-server');
  this.route('game-manager', {path: '/game-manager'});
  this.route('game-manager');
  this.route('game-edit', {path: 'game-edit/:game_id'});
  // this.route('game-edit');
  this.route('ser-list');

  this.route('ser-edit');
});

export default Router;
