import Ember from "ember";
import ENV from "beer-fridge/config/environment";

export default Ember.Route.extend({
  actions: {
    "add-beer": function() {
      const params = Ember.$.param({
        ret: `${window.location.origin}${this.router.generate('checkin', '{CODE}')}`,
        SCAN_FORMATS: 'EAN_13,UPC_A'
      });

      const url = ENV.zxingEndpoint + "?" + params;
      window.location.replace(url);
    },
    unauthenticate() {
      firebase.auth().signOut().catch((err) => alert(err));
    }
  }
});
