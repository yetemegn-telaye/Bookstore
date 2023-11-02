// import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
// const ADDBOOK = 'ADDBOOK';
// const REMOVEBOOK = 'REMOVEBOOK';

// const initialState = [

//   {
//     id: uuidv4(),
//     title: 'Hunger Games',
//     author: 'Suzzane Collins',
//   },
//   {
//     id: uuidv4(),
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//   },

// ];
// // Action Creators
// export function addBook(book) {
//   return {
//     type: ADDBOOK,
//     book,
//   };
// }

// export function removeBook(id) {
//   return {
//     type: REMOVEBOOK,
//     id,
//   };
// }

// // Reducer
// export default function bookReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'ADDBOOK':
//       return [
//         ...state,
//         action.book,
//       ];
//     case 'REMOVEBOOK':
//       return state.filter((book) => action.id !== book.id);
//     default: return state;
//   }
// }
const apiKey = 'w8XZiEYWHqZVTTrAZGoW';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books`;

const booksList = [];

export const getBookList = createAsyncThunk('books/getBookList', async () => {
  const resp = await axios.get(baseUrl);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  await axios.post(baseUrl, data);
  return data;
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
      const newState = state;
      Object.entries(action.payload).forEach((elt) => {
        newState.push({
          id: elt[0],
          title: elt[1][0].title,
          category: elt[1][0].category,
          author: elt[1][0].author,
          totChapters: 100,
          currChapters: 50,
          comments: [],
        });
      });
      return newState;
    });

    build.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        category: action.payload.category,
        author: action.payload.author,
      });
    });
    build.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
  },
});

export default bookSlice.reducer;
