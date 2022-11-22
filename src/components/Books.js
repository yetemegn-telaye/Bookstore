import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookList } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(getBookList());
    }
  }, []);
  const booksArr = useSelector((state) => state.books);
  if (booksArr.length > 0) {
    return (
      <div>
        <h1>Books</h1>
        {
          booksArr.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              bookId={book.id}
            />
          ))
            }
        <AddBook />
      </div>
    );
  }
  return '';
};
export default Books;
