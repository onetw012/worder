import React, { PropTypes } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const InputText = ({label, primary, icon, disabled}) => (
	<RaisedButton
    label={label}
    primary={primary}
    icon={icon}
    onClick={onClick}
		disabled={disabled}
	/>
);

RaisedButton.propTypes = {
	label: PropTypes.string,
  primary: PropTypes.bool,
  icon: PropTypes.object,
	disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default RaisedButton;
