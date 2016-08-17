import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';

const Counter = ({ label, value, onChange }) => (
	<TextField
		hintText="number"
		type="text"
		onChange={ (event) => {
			const newValue = parseInt(event.target.value, 10);
			return onChange(newValue);
		}}
		value={ value }
		floatingLabelText={label}
		fullWidth={true}
		/>
);

Counter.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Counter;
