import React from 'react';

import ChangeButton from './ChangeButton';

const ChangeWordButtons = () => (
  <div>
    <ChangeButton type="DECREMENT_WORD"/>
    <ChangeButton type="INCREMENT_WORD"/>
  </div>
);

export default ChangeWordButtons;
