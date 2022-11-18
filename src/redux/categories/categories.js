// Actions
const CHECKSTATUS = 'CHECKSTATUS';

const catagories = [];

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
