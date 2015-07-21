import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create', function() {
    this.route('details');
    this.route('dates');
  });
  this.route('events');
  this.route('poll', {path: '/poll/:event_id'});
});

export default Router;
