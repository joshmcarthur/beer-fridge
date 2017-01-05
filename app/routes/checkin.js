import Ember from "ember";
import ENV from "beer-fridge/config/environment";

export default Ember.Route.extend({
  model(params) {
    const url = `https://api.untappd.com/v4/beer/checkbarcodemultiple?upc=${params.barcode}&access_token=${ENV.untappdAccessToken}`;
    return Ember.$.get(url).then( (data, textStatus, xhr) => {
      if (data.response.items.length && xhr.status === 200) {
        return data.response.items;
      } else {
        return Ember.RSVP.reject({message: `Barcode ${params.barcode} not found on Untappd!`});
      }
    });
  },
  actions: {
    add(result) {
      const quantityCheckingIn = result.quantity;
      delete result.quantity;

      const db = firebase.database();
      const recordLocation = `beers/${result.beer.bid}`;
      return db.ref(recordLocation).update(result)
      .then(() => {
        return db.ref(recordLocation + "/quantity").transaction((currentQuantity) => {
          return (currentQuantity || 0) + parseInt(quantityCheckingIn);
        });
      })
      .then(() => this.transitionTo('index'))
      .catch((err) => alert(err));
    }
  }
});
