import React from "react";
import propTypes from "prop-types";
import Header from "../Header/Header";

function Layout({ hero, children }) {
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
