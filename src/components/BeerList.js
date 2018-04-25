import React from "react";
import BeerCard from "./BeerCard";

const BeerList = ({ beers, updateInventory }) => {
  return Object.keys(beers).map(key => (
    <BeerCard
      id={key}
      key={key}
      onConsumed={() => updateInventory(key, -1)}
      {...beers[key]}
    />
  ));
};

export default BeerList;
