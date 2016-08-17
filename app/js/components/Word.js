import React from 'react';

import ChangeWordButtons from './ChangeWordButtons';

const EMPTY_WORD = {
	title: '',
	description: '',
	translation: ''
};

class Word extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
		const word = this.getCurrentWord(state, store);
		const allowDescription = state.settings.showDescription;
		const allowTranslation = state.settings.showTranslation;
		return (
			<div>
				<div>
					<div>{ word.title }</div>
					<div>{ allowTranslation ? word.translation : ''}</div>
					<div>{ allowDescription ? word.description : ''}</div>
				</div>
				<ChangeWordButtons />
			</div>
		);
	}

	getCurrentWord(state) {
		const currentListIndex = state.currentList;
		const list = state.lists[currentListIndex];
		let currentWordIndex;
		if (list && Array.isArray(list.words)) {
			currentWordIndex = state.currentWord;
		}
		return (currentWordIndex !== undefined && list.words[currentWordIndex]) ?
			list.words[currentWordIndex] :
			EMPTY_WORD;
	}
}

Word.contextTypes = {
	store: React.PropTypes.object
};

export default Word;
