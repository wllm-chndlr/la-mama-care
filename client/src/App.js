import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boxes from "./pages/Boxes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import AppBar from "./components/AppBar";

const App = () =>
  <Router>
    <div>
      <Nav />
      {/* <AppBar/> */}
      <Switch>
        <Route exact path="/" component={Boxes} />
        <Route exact path="/boxes" component={Boxes} />
        <Route exact path="/boxes/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
