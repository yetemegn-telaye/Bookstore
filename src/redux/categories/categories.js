// Actions
const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

// Reducer
export default function categoriesReducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case 'CHECKSTATUS':
      return 'Under construction';
    default: return state;
  }
}

// Action Creators
export function checkStatus(categories) {
  return { type: CHECKSTATUS, categories };
}
