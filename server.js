import 'babel-core/register';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html/Html';
import Router from './core/Router';

// import App from './components/App';

const server = express();
const port = process.env.PORT || 3000;

// const bs = require('browser-sync').create();
//  bs.init({ proxy: 'localhost:3000'});

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', (req, res) => {
  const component = Router.match(req);
  const body = ReactDOM.renderToString(component);
  const html = ReactDOM.renderToStaticMarkup(<Html
    title="My App"
    description="Isomorphic web application sample"
    body={body} />);
  res.send('<!doctype html>\n' + html);
});

server.listen(port, () => console.log(
  `Node.js server is listening at http://localhost:${port}/`
));
