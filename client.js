/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

import 'babel-core/register';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import  Router  from './core/Router';

function run() {
  const component = Router.match({
    path: window.location.pathname
  });

  ReactDOM.hydrate(component, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
