import React from 'react';

const EMPTY_WORD = {
	title: '',
	description: '',
	translation: ''
};

export default class Word extends React.Component {
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
		const word = this.getCurrentWord(state);
		const allowDescription = state.settings.showDescription;
		const allowTranslation = state.settings.showTranslation;
		return (
			<div>
				<div>{ word.title }</div>
				<div>{ allowDescription ? word.description : ''}</div>
				<div>{ allowTranslation ? word.translation : ''}</div>
			</div>
		);
	}

	getCurrentWord(state) {
		const currentListIndex = state.currentList;
		const currentWordIndex = state.currentWord;
		return (
			state.lists && 
			state.lists[currentListIndex] && 
			state.lists[currentListIndex].words && 
			state.lists[currentListIndex].words[currentWordIndex]) ?
			state.lists[currentListIndex].words[currentWordIndex] :
			EMPTY_WORD;
	}
}

Word.contextTypes = {
	store: React.PropTypes.object
};