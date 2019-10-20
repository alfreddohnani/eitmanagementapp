import React from "react";
import { Router, Route, Switch } from "react-router";

import { createBrowserHistory } from "history";

// Route components
import App from "../../ui/App";
import EitList from "../../ui/components/EitList/EitList.component";
const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />{" "}
      <Route exact path="/eits" component={EitList} />
    </Switch>{" "}
  </Router>
);
