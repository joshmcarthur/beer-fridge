import React from "react";
import AppBar from "material-ui/AppBar";

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const BeerFridgeAppBar = () => (
  <AppBar showMenuIconButton={false} title="Beer Fridge" />
);

export default BeerFridgeAppBar;
