import React from "react";
import AppBar from "material-ui/AppBar";
import logo from '../../images/logo.png' // relative path to image 

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="La Mama Care"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={
      <img
        src={logo}
        alt={"logo"}
        style={{
          width: "20%",
          padding: "2%"
        }}
      />
    }
    style={{
      marginbottom: "150px"
    }}
  />
);

export default AppBarExampleIcon;
