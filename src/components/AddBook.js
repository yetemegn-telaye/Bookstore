import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddClick = () => {
    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
    };
    dispatch(addBook(newBook));
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
  return (
    <form>
      <h3>Add new Book</h3>
      <input type="text" placeholder="Book Title" name="title" id="title" onChange={(e) => setBookTitle(e.target.value)} />
      <input type="author" placeholder="Author" name="author" id="author" onChange={(e) => setBookAuthor(e.target.value)} />
      <button
        type="button"
        onClick={handleAddClick}
      >
        Add Book
      </button>

    </form>
  );
};
export default AddBook;
