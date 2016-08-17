import React, { PropTypes } from 'react';

import Toggle from 'material-ui/Toggle';

const Switcher = ({ label, checked, onClick }) => (
	<Toggle
    label={label}
		onToggle={ () => { onClick(); } }
    defaultToggled={ checked }
  />
);


Switcher.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Switcher;
