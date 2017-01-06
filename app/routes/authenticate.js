import Ember from "ember";

export default Ember.Route.extend({
  beforeModel() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then( () => this.transitionTo('index') )
      .catch( (error) => alert(`Error authenticating: ${error.message}`));
  }
});
//
