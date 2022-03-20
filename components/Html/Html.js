/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

import React from 'react';
import propTypes from 'prop-types';

function Html({ title, description, body }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="client.js" async />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: body}} />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  body: propTypes.string.isRequired
};

export default Html;
