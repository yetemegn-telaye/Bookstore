import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookList } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';
import '../styles/books.css';

const Books = () => {
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      shouldFetch.current = false;
      dispatch(getBookList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const booksArr = useSelector((state) => state.books.books);
  if (Object.keys(booksArr).length > 0) {
    return (
      <div className="books-container">
        <div className="books">
          {Object.entries(booksArr).map(([id, book]) => (
            <Book
              key={id}
              title={book.title}
              author={book.author}
              category={book.category}
              bookId={id}
              currChapters={Number(book.currChapters)}
              totChapters={Number(book.totChapters)}
            />
          ))}
        </div>
        <hr />
        <AddBook />
      </div>
    );
  }
  return <AddBook />;
};
export default Books;
