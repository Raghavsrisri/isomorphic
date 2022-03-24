import "babel-core/register";
import path from "path";
import express from "express";
import React from "react";
import ReactDOM from "react-dom/server";
import Router from "./core/Router";
import Html from "./components/Html/Html";

const server = express();
const port = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, "public")));

server.use((req, res, next) => {
  if (typeof req.query.admin !== "undefined") {
    req.user = { name: "Tarkus " };
  } else {
    req.user = null;
  }
  next();
});

// server.use('/api', require('./api/test').default);
function run() {
  constlocation = { path: window.location.pathname };
  const component = Router.match(location, window.AppState);
  ReactDOM.render(component, document.getElementById("app"));
}

server.get("*", (req, res) => {
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
  res.status(page.status).send("<!doctype html>\n" + html);
});
server.use('/api', require('./api/test.js'));

server.listen(port, () =>
  console.log(`Node.js server is listening at http://localhost:${port}/`)
);
