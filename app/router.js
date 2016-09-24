import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('more');
  this.route('quotes');
  this.route('credits');
  this.route('contact');
});

export default Router;
