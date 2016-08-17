import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';

import Word from './Word';
import Lists from './Lists';
import Settings from './Settings';

const Content = ({currentTab}) => (
  <SwipeableViews
    className="content"
  >
    {(() => {
      switch (currentTab) {
        case 0:  return (<Word />);
        case 1: return (<Lists />);
        case 2: return (<Settings />);
        default:      return (<Word />);
      }
    })()}
  </SwipeableViews>
);

Content.propTypes = {
  currentTab: PropTypes.number.isRequired,
}

export default Content;
