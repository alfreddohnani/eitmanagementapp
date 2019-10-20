import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";
import { renderROutes, renderRoutes } from "../imports/startup/client/routes";

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("react-target"));
});
