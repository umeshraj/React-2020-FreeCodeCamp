import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* About */}
        <Route path="/about">
          <About />
        </Route>
        {/* People */}
        <Route path="/people">
          <People />
        </Route>
        {/* Error page */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
