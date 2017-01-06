import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    add() {
      const result = this.get('result');
      const quantityCheckingIn = result.quantity;
      delete result.quantity;

      const db = firebase.database();
      const recordLocation = `beers/${result.beer.bid}`;
      return db.ref(recordLocation).update(result)
      .then(() => {
        return db.ref(recordLocation + "/quantity").transaction((currentQuantity) => {
          if (! quantityCheckingIn) { return; }
          return (currentQuantity || 0) + parseInt(quantityCheckingIn);
        });
      })
      .then(() => { this.sendAction("added"); })
      .catch((err) => alert(err));
    }
  }
});
