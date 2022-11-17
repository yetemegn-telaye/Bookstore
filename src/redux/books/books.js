import { v4 as uuidv4 } from 'uuid';

// Actions
const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

const initialState = [

  {
    id: uuidv4(),
    title: 'Hunger Games',
    author: 'Suzzane Collins',
  },
  {
    id: uuidv4(),
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },

];
// Action Creators
export function addBook(book) {
  return {
    type: ADDBOOK,
    book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVEBOOK,
    id,
  };
}

// Reducer
export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADDBOOK':
      return [
        ...state,
        action.book,
      ];
    case 'REMOVEBOOK':
      return state.filter((book) => action.id !== book.id);
    default: return state;
  }
}
