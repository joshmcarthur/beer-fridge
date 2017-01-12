import Ember from "ember";

export default Ember.Route.extend({
  ref: firebase.database().ref("beers"),
  model() {
    return this.get("ref")
      .once("value")
      .then(this._buildCollection);
  },
  setupController(controller) {
    this.get("ref").on("value", (snapshot) => {
      controller.set("model", this._buildCollection(snapshot));
    });
  },
  _buildCollection(snapshot) {
    const records = [];
    snapshot.forEach((childSnapshot) => {
      records.pushObject(childSnapshot.val());
    });

    return records;
  }
});
