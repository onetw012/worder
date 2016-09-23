/* CHANGE WORD */
export const decrementWordIndex = (activeWordsLength) => ({
	type: 'DECREMENT_WORD',
	activeWordsLength
});

export const incrementWordIndex = (activeWordsLength) => ({
	type: 'INCREMENT_WORD',
	activeWordsLength
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

/* MENU */

export const setCurrentTab = (value) => ({
	type: 'SET_CURRENT_TAB',
	value
});



/* CATEGORY */

export const setCategoryName = (value, id) => ({
	type: 'SET_CATEGORY_NAME',
	value,
	id
});

export const newCategory = (value) => ({
	type: 'NEW_CATEGORY',
	value,
});

export const setNewCategoryName = (value, id) => ({
	type: 'SET_NAME',
	value,
});

export const removeCategory = (id) => ({
	type: 'REMOVE_CATEGORY',
	id
});


/* WORD */

export const newWord = (data) => ({
	type: 'NEW_WORD',
	data,
});

export const editWord = (data) => ({
	type: 'EDIT_WORD',
	data,
});


export const removeWord = (wordId) => ({
	type: 'REMOVE_WORD',
	wordId,
});

export const removeWordsByCategoryId = (categoryId) => ({
	type: 'REMOVE_WORDS_BY_CATEGORY',
	categoryId
});
