import Ember from "ember";
import ENV from "beer-fridge/config/environment";

export default Ember.Route.extend({
  model(params) {
    const url = `https://api.untappd.com/v4/beer/checkbarcodemultiple?upc=${params.barcode}&access_token=${ENV.untappdAccessToken}`;
    return Ember.$.get(url).then( (data, textStatus) => {
      if (data.response.items.length && textStatus === 200) {
        return data.response.items[0];
      } else {
        return Ember.RSVP.reject({message: `Barcode ${params.barcode} not found on Untappd!`});
      }
    });
  }
});
