import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = 'w8XZiEYWHqZVTTrAZGoW';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

const booksList = [];

export const getBookList = createAsyncThunk('books/getBookList', async () => {
  const response = await axios.get(baseUrl);
  if (response.data) {
    return response.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(baseUrl, book);
  if (response.status === 201) {
    // Enrich the book object with additional properties for the local state
    return {
      id: book.item_id,
      title: book.title,
      category: book.category,
      author: book.author,
      totChapters: 0, // default value for total chapters
      currChapters: 0, // default value for current chapters read
      comments: [], // default value for comments
    };
  }
  throw new Error('Failed to add book');
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
  return id;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: booksList,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getBookList.fulfilled, (state, action) => {
      const fetchedBooks = Object.entries(action.payload).map((elt) => ({
        id: elt[0], // assuming each key has an array of book objects
        title: elt[1][0].title,
        category: elt[1][0].category,
        author: elt[1][0].author,
        totChapters: 0, // default value for total chapters
        currChapters: 0, // default value for current chapters read
        comments: [], // default value for comments
      }));
      return fetchedBooks;
    });

    build.addCase(addBook.fulfilled, (state, action) => {
      // Add the new book with additional properties to the state
      state.push(action.payload);
    });

    build.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
  },
});

export default bookSlice.reducer;
