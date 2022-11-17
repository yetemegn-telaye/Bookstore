import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    id: '0',
    title: 'null',
    author: 'null',
  });
  const dispatch = useDispatch();
  const handleAddClick = () => {
    const newBook = {
      id: uuidv4(),
      title: document.querySelector('#title').value,
      author: document.querySelector('#author').value,
    };
    setBook(newBook);
    dispatch(addBook(book));
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
  return (
    <form>
      <h3>Add new Book</h3>
      <input type="text" placeholder="Book Title" name="title" id="title" />
      <input type="author" placeholder="Author" name="author" id="author" />
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
