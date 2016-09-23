import React, {PropTypes} from 'react';

import FlatButton from 'material-ui/FlatButton';

const ChangeButton = ({text, activeWordsLength, onClick}) => (<FlatButton primary label={text} onClick={() => {
  onClick(activeWordsLength);
}}/>);

ChangeButton.propTypes = {
  text: PropTypes.string.isRequired,
  activeWordsLength: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ChangeButton;
