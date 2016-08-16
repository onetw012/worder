import React, { PropTypes } from 'react';

const Switcher = ({ label, checked, onClick }) => (
	<label>
		{ label }
		<input type="checkbox"
			defaultChecked={ checked }
			onClick={ () => { onClick(); } }
		/>
	</label>
);


Switcher.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Switcher;
