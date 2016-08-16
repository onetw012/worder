import React, {PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';

import Word from './Word';
import ChangeWordButtons from './ChangeWordButtons';
import Settings from './Settings';

const Content = () => (
  <div>
    <SwipeableViews
      index={0}
    >
      <Word />
      <ChangeWordButtons />
      <Settings />
    </SwipeableViews>
  </div>
);

Content.propTypes = {};

export default Content;
