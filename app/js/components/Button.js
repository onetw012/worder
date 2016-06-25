import React, { PropTypes } from 'react';

const Button = ({ text, onClick }) => (
	<button 
		onClick={ () => { onClick(); } }
	>
		{ text }
	</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;