import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'w8XZiEYWHqZVTTrAZGoW';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

export const getBookList = createAsyncThunk('books/getBookList', async () => {
  const response = await axios.get(baseUrl);
  if (response.data) {
    return response.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(baseUrl, {
    item_id: book.itemId,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  localStorage
    .setItem(book.itemId, JSON.stringify(
      { currChapters: book.currChapters, totChapters: book.totChapters },
    ));
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  localStorage.removeItem(id);
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookList.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = {};
      Object.entries(action.payload).forEach(([id, bookData]) => {
        const localData = JSON.parse(localStorage.getItem(id));
        const currChapters = localData ? localData.currChapters : 0;
        const totChapters = localData ? localData.totChapters : 0;
        // eslint-disable-next-line no-param-reassign
        state.books[id] = {
          ...bookData[0],
          currChapters,
          totChapters,
        };
      });
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      const { itemId, ...bookData } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.books[itemId] = {
        ...bookData,
        currChapters: bookData.currChapters || 0, // or some other logic to set this value
        totChapters: bookData.totChapters || 0,
      };
    });

    builder.addCase(removeBook.fulfilled, (state, action) => {
      // Remove the book with the given ID
      // eslint-disable-next-line no-param-reassign
      delete state.books[action.payload];
    });
  },
});

export default bookSlice.reducer;
