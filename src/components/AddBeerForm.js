import React from "react";
import queryString from "query-string";
import BeerCard, { styles } from "./BeerCard";
import ProgressIndicator from "./ProgressIndicator";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const buttonStyle = {
  marginRight: "0.5rem"
};

class AddBeerForm extends React.Component {
  accessToken = process.env.REACT_APP_UNTAPPD_ACCESS_TOKEN;
  quantityRef = React.createRef();
  state = {
    loaded: false,
    beer: null,
    brewery: null,
    quantity: 1
  };
  componentDidMount() {
    // 1. Fetch the beer info from Untappd
    // 2. Set the details in the state of this component
    // 3. Default the quantity to 1
    //this.lookupBeerDetails(this.props.match.)
    this.props.location.queryParams = queryString.parse(
      this.props.location.search
    );
    this.lookupBeer(this.props.location.queryParams.barcode);
  }
  lookupBeer(barcode) {
    const url = `https://api.untappd.com/v4/beer/checkbarcodemultiple?upc=${barcode}&access_token=${
      this.accessToken
    }`;
    fetch(url)
      .then(data => data.json())
      .then(json => {
        if (!json.response || !json.response.items) return;
        return json.response.items[0];
      })
      .then(item => {
        if (!item) throw new Error(`${barcode} was not found on Untappd!`);
        this.setState({ loaded: true, beer: item.beer, brewery: item.brewery });
      });
  }
  doCancel = e => {
    if (e) e.preventDefault();
    this.props.history.push("/");
  };
  doSave = e => {
    e.preventDefault();
    this.props.save({
      beer: this.state.beer,
      brewery: this.state.brewery,
      quantity: parseInt(this.quantityRef.current.input.value, 10)
    });
    this.doCancel();
  };
  render() {
    if (!this.state.loaded) return <ProgressIndicator />;
    return (
      <form onSubmit={e => this.doSave(e)}>
        <BeerCard
          beer={this.state.beer}
          brewery={this.state.brewery}
          expanded={true}
          expandable={false}
        />
        <div style={styles.card}>
          <TextField
            floatingLabelText="Quantity"
            defaultValue={this.state.quantity}
            ref={this.quantityRef}
            type="number"
          />
          <br />
          <RaisedButton
            style={buttonStyle}
            primary={true}
            type="submit"
            label="Add this Beer"
          />
          <RaisedButton
            style={buttonStyle}
            onClick={e => this.doCancel(e)}
            label="Cancel"
          />
        </div>
      </form>
    );
  }
}

export default AddBeerForm;
