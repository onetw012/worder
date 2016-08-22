import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const InputText = ({floatingLabelText, defaultValue, onChange, hintText, fullWidth, id }) => (
	<TextField
		hintText={hintText}
		type="text"
		onChange={ (event) => onChange(event.target.value, id) }
		defaultValue={ defaultValue }
		floatingLabelText={ floatingLabelText }
		fullWidth={fullWidth}
	/>
);

InputText.propTypes = {
	id: PropTypes.number,
  hintText: PropTypes.string,
	defaultValue: PropTypes.string,
	fullWidth: PropTypes.bool.isRequired,
	floatingLabelText: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default InputText;
