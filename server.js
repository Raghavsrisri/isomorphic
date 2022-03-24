import 'babel-core/register';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html/Html';
import Router from './core/Router';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';

// import App from './components/App';
//just line added by Captain for testing push
const server = express();
const port = process.env.PORT || 3000;

// const bs = require('browser-sync').create();
//  bs.init({ proxy: 'localhost:3000'});

server.use(express.static(path.join(__dirname, 'public')));
server.use((req, res, next) => {
  if (typeof req.query.admin !== 'undefined') {
    req.user = { id: 1 }; // eslint-disable-line no-param-reassign
  } else {
    req.user = null; // eslint-disable-line no-param-reassign
  }
  next();
});
server.use('/graphql', graphqlHTTP({
  schema,
  rootValue: { user: { id: 1 } },
  pretty: process.env.NODE_ENV !== 'production',
  graphiql: true
}));
server.get('*', (req, res) => {
  const state = { user: req.user };
  const [component, page] = Router.match(req, state);
  const body = ReactDOM.renderToString(component);
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title={page.title}
      description={page.description}
      body={body}
      state={state}
    />
  );
  res.status(page.status).send(`<!doctype html>\n${html}`);
});
server.listen(port, () => console.log(
  `Node.js server is listening at http://localhost:${port}/`
));
