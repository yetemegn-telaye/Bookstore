// Actions
const CHECKSTATUS = 'CHECKSTATUS';

const catagories = [
  { name: 'Fiction', id: 1 },
  { name: 'Non-Fiction', id: 2 },
  { name: 'Fantasy', id: 3 },
  { name: 'Sci-Fi', id: 4 },
  { name: 'Romance', id: 5 },
  { name: 'Mystery', id: 6 },
  { name: 'Horror', id: 7 },
  { name: 'Thriller', id: 8 },
  { name: 'Children', id: 9 },
  { name: 'Young Adult', id: 10 },
];

// Reducer
export default function categoriesReducer(state = catagories, action) {
  switch (action.type) {
    case 'CHECKSTATUS':
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function checkStatus() {
  return {
    type: CHECKSTATUS,
  };
}
