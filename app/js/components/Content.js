import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';

import Word from './Word';
import Lists from './Lists';
import Settings from './Settings';

const Content = ({secectedIndex}) => (
  <div>
    <SwipeableViews
      index={secectedIndex}
    >
      <Word />
      <Lists />
      <Settings />
    </SwipeableViews>
  </div>
);

Content.propTypes = {};

export default Content;
