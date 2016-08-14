/* CHANGE WORD */
export const decrementWordIndex = () => ({
	type: 'DECREMENT_WORD'
});

export const incrementWordIndex = () => ({
	type: 'INCREMENT_WORD'
});

export const nullWordIndex = () => ({
	type: 'NULL_WORD'
});

/* SETTINGS */
export const toggleShowDescription = () => ({
	type: 'TOGGLE_SHOW_DESCRIPTION'
});

export const toggleShowTranslation = () => ({
	type: 'TOGGLE_SHOW_TRANSLATION'
});

export const showWordInTimeout = (value) => ({
	type: 'SHOW_WORD_IN_TIMEOUT',
	value
});

export const notifyAfter = (value) => ({
	type: 'NOTIFY_AFTER',
	value
});
