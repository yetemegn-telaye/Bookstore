import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    cats: categoriesReducer,
  },
});

export default store;
