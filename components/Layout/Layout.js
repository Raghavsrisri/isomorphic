import React from "react";
import propTypes from "prop-types";
import Header from "../Header/Header";
import { canUseDOM } from "fbjs/lib/ExecutionEnvironment";
import Context from "../Context";
import Captain from '../Captain/Captain'
import Home from "../../routes/Home/Home";
import Hero from "../../routes/Home/Hero";

function FunctionCurrentTime() {

  const elem = canUseDOM && document.querySelector(".time[data-time]");
  const time = elem ? +elem.dataset.time : Date.now();
  return (
    <p className="time" data-time={time}>
      Current time (timestamp in ms): {time}
    </p>
  );
}

function Layout({ hero, children }) {
  const page = {
    title: 'My Application',
    description: 'Isomorphic web application sample',
    status: 200
  };
  return (
    <div>
      <Header></Header>

      <main>{children}</main>
      <footer>
        <span>© Company Name</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  hero: propTypes.element,
  children: propTypes.element.isRequired,
};

export default Layout;
