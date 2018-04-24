import React from "react";
import { Card, CardHeader, CardText, CardTitle } from "material-ui/Card";
import Chip from "material-ui/Chip";
import Paper from "material-ui/Paper";

const styles = {
  chip: {
    margin: "0 0.5rem 0 0",
    display: "inline-block"
  },
  card: {
    height: "auto",
    width: "90%",
    maxWidth: "480px",
    margin: "1rem auto",
    display: "block"
  }
};

export default class BeerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  render() {
    const { beer, brewery, quantity } = this.props;
    return (
      <Card
        style={styles.card}
        expanded={this.state.expanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={beer.beer_name}
          subtitle={`${quantity} in stock`}
          avatar={beer.beer_label}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardTitle
          expandable={true}
          title={null}
          subtitle={brewery.brewery_name}
        />
        <CardText expandable={true}>{beer.beer_description}</CardText>
        <CardText expandable={true}>
          <Chip style={styles.chip}>{beer.beer_style}</Chip>
          <Chip style={styles.chip}>{beer.beer_abv} %</Chip>
        </CardText>
      </Card>
    );
  }
}
