import React from "react";
import AppBar from "material-ui/AppBar";
import logo from '../../images/logo.png'
import "./AppBar.css";


const AppBarExampleIcon = () => (
  <AppBar
    className="appBar"
    title="La Mama Care"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={
      <img
        src={logo}
        href={"/"}
        alt={"logo"}
        style={{
          width: "20%",
          padding: "2%"
        }}
      />
    }
    style={{
      backgroundColor: "#fff",
      marginBottom: "30px"
    }}
  />
);

export default AppBarExampleIcon;