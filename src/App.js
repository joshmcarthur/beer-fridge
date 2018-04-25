import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import myTheme from "./theme.js";
import AppBar from "./components/AppBar";
import BeerList from "./components/BeerList";
import base from "./base";

class App extends Component {
  state = {
    beers: {}
  };
  componentDidMount() {
    this.ref = base.syncState(`/beers`, {
      context: this,
      state: "beers"
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  updateInventory = (key, change) => {
    const beers = { ...this.state.beers };
    const beer = beers[key];
    if (!beer) return;
    beer.quantity = (beer.quantity || 0) + change;
    this.setState({ beers });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
        <div>
          <AppBar />
          <BeerList
            updateInventory={this.updateInventory}
            beers={this.state.beers}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
