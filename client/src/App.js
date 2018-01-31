import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boxes from "./pages/Boxes";
import Items from "./pages/Items";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Sign from "./pages/Sign";
import Packages from "./pages/Packages";
import Resources from "./pages/Resources";
// import Nav from "./components/Nav";
import AppBarTop from "./components/AppBar";
import Foot from "./components/Footer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        {/* <Nav /> */}
        <AppBarTop />
        {/* <Foot/> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/kit" component={Items} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/kits" component={Boxes} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/sign" component={Sign} />
          <Route exact path="/boxes/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Foot />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
