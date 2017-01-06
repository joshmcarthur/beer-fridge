import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    consume() {
      const item = this.get('item');
      const db = firebase.database();
      const record = db.ref(`beers/${item.beer.bid}`);
      record.child("quantity")
        .transaction(function(count) { return count - 1; })
        .then((result) => {
          if (result.committed && result.snapshot.val() <= 0) {
            return record.remove();
          }
        });
    }
  }
});
