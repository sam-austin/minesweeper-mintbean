import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";
import TopBar from "./layout/TopBar";
import LandingPage from "./layout/LandingPage"
import GameContainer from "./gameComponents/GameContainer"

const App = (props) => {

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/game" component={GameContainer} />
      </Switch>
    </Router>
  );
};

export default hot(App);