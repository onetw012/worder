import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import IconButton from 'material-ui/IconButton';
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';


const BackButton = ({to}) => (
  <IconButton
    touch={true}
    onClick={ () => {browserHistory.push(to)} } >
      <IcoArrowBack />
  </IconButton>
)

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
}

export default BackButton;
