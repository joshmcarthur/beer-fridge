import React from "react";
import queryString from "query-string";

class AddBeerForm extends React.Component {
  state = {
    record: {
      quantity: 1
    }
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
    alert(barcode);
    const url = `https://api.untappd.com/v4/beer/checkbarcodemultiple?upc=${barcode}&access_token=${
      this.accessToken
    }`;
    fetch(url)
      .then(data => data.json())
      .then(json => {
        if (!json.response.items.length) {
          throw `${barcode} was not found on Untappd!`;
        }
        console.log(json.response.items);
      });
  }
  render() {
    return <div>Oh hey</div>;
  }
}

export default AddBeerForm;
