import {word} from './word';

export const words = (state = [], action) => {
  switch (action.type) {
    case 'NEW_WORD':
      {
        return [
          ...state,
          word(undefined, action)
        ];
      }
    case 'EDIT_WORD':
      {
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
    default:
      {
        return state;
      }
  }
};
