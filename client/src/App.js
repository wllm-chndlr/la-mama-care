import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boxes from "./pages/Boxes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
// import Nav from "./components/Nav";
import AppBarTop from "./components/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>
        {/* <Nav /> */}
        <AppBarTop/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/boxes" component={Boxes} />
          <Route exact path="/boxes/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
