import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYc_bUuVSffHfOUhOlLahHZCu54C8a_8U",
  databaseURL: "https://sudojosh-beer-fridge.firebaseio.com/",
  authDomain: "sudojosh-beer-fridge.firebaseapp.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
