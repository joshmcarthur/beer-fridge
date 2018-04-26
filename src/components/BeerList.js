import React from "react";
import BeerCard from "./BeerCard";
import CircularProgress from "material-ui/CircularProgress";

const progressStyle = {
  position: "absolute",
  top: "50%",
  left: "50%"
};

const BeerList = ({ isLoading, user, beers, updateInventory }) => {
  if (isLoading) {
    return <CircularProgress style={progressStyle} />;
  }
  return Object.keys(beers).map(key => (
    <BeerCard
      id={key}
      key={key}
      user={user}
      onConsumed={() => updateInventory(key, -1)}
      {...beers[key]}
    />
  ));
};

export default BeerList;
