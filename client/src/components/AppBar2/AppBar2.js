import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from '../../images/logo_crop.png'
import cart from '../../images/cart.svg'
// import "./AppBar.css";
import AppBar from "material-ui/AppBar";


const AppBar2 = () => (
  <AppBar
    style={{ background: "#444" }}
    // title="La Mama Care"
    iconElementRight={
      <img 
        src={logo} 
        alt={"logo"}
        style={{ padding: "5%", maxWidth: "75%" }}
      />
    }
    // iconElementRight="muidocs-icon-navigation-expand-more"
    iconClassNameRight="navigation-menu"

    // showMenuIconButton="true"
  />
);

export default AppBar2;