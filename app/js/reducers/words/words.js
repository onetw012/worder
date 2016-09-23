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
      return state.forEach((word, index, array) => {
        if (word.id == action.wordId)
          array.splice(index, 1);
        }
      )
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
