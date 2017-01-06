import Ember from "ember";

export default Ember.Controller.extend({
  applicationController: Ember.inject.controller("application"),
  user: Ember.computed.reads("applicationController.user")
});
