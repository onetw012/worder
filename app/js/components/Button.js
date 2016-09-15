import React, {PropTypes} from 'react';

import FlatButton from 'material-ui/FlatButton';

const Button = ({text, onClick}) => (<FlatButton primary label={text} onClick={() => {
  onClick();
}}/>);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
