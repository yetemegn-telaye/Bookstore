import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const booksArr = useSelector((state) => state.books);
  return (
    <div>
      <h1>Books</h1>
      {
        booksArr.map((book) => <Book key={book.id} title={book.title} author={book.author} bookId={book.id} />)
      }
      <AddBook />
    </div>
  );
};
export default Books;
