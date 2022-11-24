import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../styles/addBook.css';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddClick = () => {
    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      category: 'Fiction',
      author: bookAuthor,
    };
    dispatch(addBook(newBook));
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
  return (
    <form className="add-book-form">
      <h3 className="form-title">Add new Book</h3>
      <div className="form-inputs">
        <input type="text" className="title-input" placeholder="Book Title" name="title" id="title" onChange={(e) => setBookTitle(e.target.value)} />
        <input type="author" className="author-input" placeholder="Author" name="author" id="author" onChange={(e) => setBookAuthor(e.target.value)} />
        <button
          type="button"
          className="add-book-btn"
          onClick={handleAddClick}
        >
          Add Book
        </button>
      </div>

    </form>
  );
};
export default AddBook;
