import CircularProgress from "material-ui/CircularProgress";
import React from "react";

const progressStyle = {
  position: "absolute",
  top: "50%",
  left: "50%"
};

export default () => <CircularProgress style={progressStyle} />;
