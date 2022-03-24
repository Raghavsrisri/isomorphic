/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

import "babel-core/register";
import React from "react";
import ReactDOM from "react-dom";
// import App from './components/App';
import Router from "./core/Router";

function run() {
  const state = window.AppState;
  constcontaine = document.getElementById("app");
  const location = { path: window.location.pathname };
  const [component, page] = Router.match(location, state);
  ReactDOM.render(component, container, () => {
    document.title = page.title;
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", page.description);
  });
}
const loadedStates = ["complete", "loaded", "interactive"];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener("DOMContentLoaded", run, false);
}
