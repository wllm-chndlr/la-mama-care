import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boxes from "./pages/Boxes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

// import Nav from "./components/Nav";
import AppBarExampleIcon from "./components/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


const App = () =>
  <MuiThemeProvider>
    <Router>
      <div>
        {/* <Nav /> */}
        <AppBarExampleIcon/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/boxes" component={Boxes} />
          <Route exact path="/boxes/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>;
  </MuiThemeProvider>

export default App;
