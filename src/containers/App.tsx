import React from "react";
import { Home } from "../pages/Home";
import { Switch, Route } from "react-router-dom";
import { Controllers } from "../components/controllers";
import { Laboratory } from "../pages/Laboratory";
import { GlobalSetts } from "./GlobalSetts";

export const App = () => {
  return (
    <GlobalSetts>
      <Controllers />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/laboratory"} component={Laboratory} />
      </Switch>
    </GlobalSetts>
  );
};
