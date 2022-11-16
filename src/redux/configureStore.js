import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

function configureStore() {
  const rootReducer = combineReducers(
    bookReducer,
    categoriesReducer,
  );
  return rootReducer;
}

export default configureStore;
