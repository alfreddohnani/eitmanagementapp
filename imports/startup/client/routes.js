import React from "react";
import { Router, Route, Switch } from "react-router";

import createBrowserHistory from "history/createBrowserHistory";

// Route components
import App from "../../ui/App";

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />{" "}
    </Switch>{" "}
  </Router>
);
