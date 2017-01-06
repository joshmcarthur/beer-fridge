import Ember from "ember";
import ENV from "beer-fridge/config/environment";

export default Ember.Route.extend({
  actions: {
    scan() {
      const currentHostAndPath = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
      const params = Ember.$.param({
        ret: `${currentHostAndPath}${this.router.generate('checkin', '{CODE}')}`,
        SCAN_FORMATS: 'EAN_13,UPC_A'
      });

      const url = ENV.zxingEndpoint + "?" + params;
      window.location.replace(url);
    }
  }
});
