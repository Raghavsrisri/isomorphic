import React from "react";
import propTypes from 'prop-types';

function Header({ children }) {
  return(
    <header>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: propTypes.element
};

export default Header;
