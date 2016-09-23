import {word} from './word';

export const words = (state = [], action) => {
  switch (action.type) {
    case 'NEW_WORD': {
      return [
        ...state,
        word(undefined, action)
      ];
     }
    case 'EDIT_WORD': {
      return state.map((word) => {
        if (word.id == action.data.id) {
          word = {
            ...word,
            ...action.data
          }
        }
        return word;
      });
    }
    case 'REMOVE_WORD': {
      const wordIndex = state.findIndex(word => String(word.id) === String(action.wordId));
      return [
        ...state.slice(0, wordIndex),
        ...state.slice(wordIndex + 1)
      ];
    }
    case 'REMOVE_WORDS_BY_CATEGORY': {
      return state.filter(word => String(word.categoryId) !== String(action.categoryId));
    }
    default:
      {
        return state;
      }
  }
};
