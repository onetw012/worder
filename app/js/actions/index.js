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

/* MENU */

export const setCurrentTab = (value) => ({
	type: 'SET_CURRENT_TAB',
	value
});



/* Category */

export const setCategoryName = (value, id) => ({
	type: 'SET_CATEGORY_NAME',
	value,
	id
});

export const newCategory = (value) => ({
	type: 'NEW_CATEGORY',
	value,
});


/* New Category */

export const setNewCategoryName = (value, id) => ({
	type: 'SET_NAME',
	value,
});


/* New word */

export const newWord = (data) => ({
	type: 'NEW_WORD',
	data,
});
