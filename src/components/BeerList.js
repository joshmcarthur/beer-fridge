import React from "react";
import BeerCard from "./BeerCard";
import ProgressIndicator from "./ProgressIndicator";

const BeerList = ({ isLoading, user, beers, updateInventory }) => {
  if (isLoading) return <ProgressIndicator />;
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
