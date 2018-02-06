import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./pages/Items";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import AppBarTop from "./components/AppBar";
import Foot from "./components/Footer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        <AppBarTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/kit" component={Items} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resources" component={Resources} />
          <Route component={NoMatch} />
        </Switch>
        <Foot />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
