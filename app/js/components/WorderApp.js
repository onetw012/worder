import React from 'react';

import Menu from '../containers/Menu';

const WorderApp = ({children}) => (
  <div>
    <Menu />
    <div className="content">
      {children}
    </div>
  </div>
);

export default WorderApp;
