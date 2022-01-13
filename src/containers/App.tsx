import React from "react";
import { Home, Laboratory, Portfolio, Project } from "../pages";
import { Switch, Route } from "react-router-dom";
import { Controllers } from "../components/controllers";
import { GlobalSetts } from "./GlobalSetts";

export const App = () => {
  return (
    <GlobalSetts>
      <Controllers />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/laboratory"} component={Laboratory} />
        <Route exact path={"/portfolio"} component={Portfolio} />
        <Route path={"/portfolio/:project"} component={Project} />
      </Switch>
    </GlobalSetts>
  );
};
