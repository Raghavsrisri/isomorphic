import React from "react";
import propTypes from 'prop-types';

function Header({ children }) {
  return(
    <header>
      <div>
        <span>My App</span>
        {
          !children &&
          <form><input type="search" /></form>
        }
        <div>
          <span>Username</span>
          <img src = "#" />
        </div>
      </div>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: propTypes.element
};

export default Header;
