import ENV from "beer-fridge/config/environment";

export function initialize() {
  firebase.initializeApp(ENV.firebaseConfig);
}

export default {
  name: 'setup-firebase',
  initialize
};
