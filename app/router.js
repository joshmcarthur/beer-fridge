import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("checkin/start", { path: "/checkin/start" });
  this.route("checkin", { path: "/checkin/:barcode" });
  this.route("checkout/start", { path: "/checkout/start" });
  this.route("checkout", { path: "/checkout/:barcode" });
  this.route("authenticate", { path: "/authenticate" });
});

export default Router;
