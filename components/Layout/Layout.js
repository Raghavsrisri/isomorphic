import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header'
function Layout({ hero, children }) {
  return (
    <div>
      <Header></Header>
      <main>
        {children}
      </main>
      <footer>
        <span>© Company Name</span>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  hero: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
