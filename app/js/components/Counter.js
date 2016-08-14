import React, { PropTypes } from 'react';

const Counter = ({ label, value, onChange }) => (
	<label>
		{ label }
		<input type="number"
			onChange={ (event) => {
				const newValue = parseInt(event.target.value, 10);
				return onChange(newValue);
			} }
			value={ value }
			min="0"
		/>
	</label>
);

Counter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Counter;