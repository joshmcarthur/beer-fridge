import Ember from "ember";

export default Ember.Controller.extend({
  init() {
    firebase.auth().onAuthStateChanged((user) => this.set('user', user));
  }
});
