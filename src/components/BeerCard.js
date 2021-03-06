import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardTitle
} from "material-ui/Card";
import Chip from "material-ui/Chip";
import FlatButton from "material-ui/FlatButton";

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

export { styles };

export default class BeerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded || false
    };
  }

  handleExpandChange = expanded => {
    this.setState({ expanded: expanded });
  };

  cardActions = () => {
    if (!this.props.user) return null;
    return (
      <FlatButton
        onClick={() => this.props.onConsumed(this.props.id, -1)}
        label="🍻 Reduce Inventory"
      />
    );
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
          subtitle={quantity ? `${quantity} in stock` : null}
          avatar={beer.beer_label}
          actAsExpander={true}
          showExpandableButton={
            this.props.expandable === undefined ? true : this.props.expandable
          }
        />
        <CardTitle
          expandable={true}
          title={null}
          subtitle={brewery.brewery_name}
        />
        <CardText expandable={true}>{beer.beer_description}</CardText>
        <CardActions expandable={true}>
          <Chip style={styles.chip}>{beer.beer_style}</Chip>
          <Chip style={styles.chip}>{beer.beer_abv} %</Chip>
        </CardActions>
        <CardActions>{this.cardActions()}</CardActions>
      </Card>
    );
  }
}
