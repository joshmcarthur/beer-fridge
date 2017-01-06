import Ember from "ember";

export default Ember.Route.extend({
  model() {
    return [];
  },
  setupController(controller) {
    const ref = firebase.database().ref("beers");
    ref.on("value", (snapshot) => { this._buildCollection(controller, snapshot); });
  },
  _buildCollection(controller, snapshot) {
    const records = [];
    snapshot.forEach((childSnapshot) => {
      records.pushObject(childSnapshot.val());
    });
    controller.set('model', records);
  }
});
