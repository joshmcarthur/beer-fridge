import Ember from "ember";
import ENV from "beer-fridge/config/environment";

export default Ember.Route.extend({
  actions: {
    scan() {
      const params = Ember.$.param({
        ret: `${window.location.origin}${this.router.generate('checkout', '{CODE}')}`,
        SCAN_FORMATS: 'EAN_13,UPC_A'
      });

      const url = ENV.zxingEndpoint + "?" + params;
      window.location.replace(url);
    }
  }
});
