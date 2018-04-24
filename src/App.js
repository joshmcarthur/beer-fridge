import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "./components/AppBar";
import BeerList from "./components/BeerList";
import base from "./base";

class App extends Component {
  state = {
    beers: {},
    selectedBeer: null
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
  didSelectBeer = beer => this.setState({ selectedBeer: beer });
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <BeerList beers={this.state.beers} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
