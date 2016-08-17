import React, { PropTypes } from 'react';

import ChangeWordButtons from './ChangeWordButtons';

const Word	= ({ title, translation, description }) => (
	<div className="word-wrap">
		<div>
			<div>{ title }</div>
			<div>{ translation }</div>
			<div>{ description }</div>
		</div>
		<ChangeWordButtons />
	</div>
);


Word.propTypes = {
  title: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Word;
