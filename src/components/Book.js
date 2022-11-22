import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, bookId } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {title}
        BY
        {author}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(bookId));
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;
