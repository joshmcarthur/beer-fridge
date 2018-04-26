import React from "react";
import FlatButton from "material-ui/FlatButton";
import IconMenu from "material-ui/IconMenu";
import Divider from "material-ui/Divider";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { white } from "material-ui/styles/colors";

const LoggedIn = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText={props.displayName} disabled={true} />
    <Divider />
    <MenuItem primaryText="Sign out" onClick={props.logout} />
  </IconMenu>
);

const AccountControl = ({ user, authenticate, logout }) => {
  if (user) {
    return (
      <LoggedIn
        iconStyle={{ color: white }}
        displayName={user.displayName}
        logout={logout}
      />
    );
  } else {
    return (
      <FlatButton
        labelStyle={{ color: white }}
        label="Login"
        onClick={() => authenticate("Google")}
      />
    );
  }
};

export default AccountControl;
