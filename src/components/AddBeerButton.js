import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import spacing from "material-ui/styles/spacing";

const style = {
  position: "fixed",
  bottom: spacing.desktopGutter,
  right: spacing.desktopGutter
};

const AddBeerButton = props => {
  if (!props.user) return null;
  return (
    <FloatingActionButton {...props} style={style}>
      <ContentAdd />
    </FloatingActionButton>
  );
};

export default AddBeerButton;
