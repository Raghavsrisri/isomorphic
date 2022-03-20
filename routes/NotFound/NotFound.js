import React from 'react';
const path = '/404';
const action = () =><NotFound />;

function NotFound () {
  return(
    <div>
      <h1>Page not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <img src="https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png" />
    </div>
  );
}

export default { path,  action };
