import React from "react";
import BeerCard from "./BeerCard";

const BeerList = ({ beers }) => {
  return Object.keys(beers).map(key => <BeerCard key={key} {...beers[key]} />);
};

export default BeerList;
