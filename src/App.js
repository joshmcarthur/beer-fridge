import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import firebase from "firebase";
import myTheme from "./theme.js";
import AppBar from "./components/AppBar";
import { BrowserRouter, Route } from "react-router-dom";
import AccountControl from "./components/AccountControl";
import BeerList from "./components/BeerList";
import AddBeerForm from "./components/AddBeerForm";
import AddBeerButton from "./components/AddBeerButton";
import base, { firebaseApp } from "./base";

class App extends Component {
  state = {
    beers: {},
    loading: true,
    currentUser: null
  };
  componentDidMount() {
    this.ref = base.syncState(`/beers`, {
      context: this,
      state: "beers",
      then: () => this.setState({ loading: false })
    });
    firebaseApp.auth().onAuthStateChanged(user => this.authHandler({ user }));
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  authHandler = async authData => {
    this.setState({ currentUser: authData.user });
  };

  updateInventory = (key, change) => {
    const beers = { ...this.state.beers };
    const beer = beers[key];
    if (!beer) return;
    beer.quantity = (beer.quantity || 0) + change;
    if (beer.quantity < 1) beers[key] = null;
    this.setState({ beers });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({ currentUser: null });
  };

  scanBarcode = () => {
    const returnUrl = `http://${window.location.host}/checkin?barcode={CODE}`;
    const url = `zxing://scan/?ret=${encodeURIComponent(
      returnUrl
    )}&SCAN_FORMATS=EAN_13,UPC_A`;
    window.location = url;
  };

  BeerManagement = () => {
    return (
      <div>
        <AddBeerButton
          user={this.state.currentUser}
          onClick={this.scanBarcode}
        />
        <BeerList
          updateInventory={this.updateInventory}
          user={this.state.currentUser}
          scanNew={this.scanBarCode}
          isLoading={this.state.loading}
          beers={this.state.beers}
        />
      </div>
    );
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
        <BrowserRouter>
          <div>
            <AppBar
              iconElementRight={
                <AccountControl
                  authenticate={this.authenticate}
                  logout={this.logout}
                  user={this.state.currentUser}
                />
              }
            />

            <Route exact path="/" render={this.BeerManagement} />
            <Route
              path="/checkin"
              render={props => <AddBeerForm {...props} save={this.addBeer} />}
            />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
