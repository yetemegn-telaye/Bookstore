import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookSlice,
    cats: categoriesReducer,
  },
});

export default store;
