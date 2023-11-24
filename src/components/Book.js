import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/book.css';

const Book = (props) => {
  const {
    title, author, bookId, currChapters, totChapters, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div className="book-info">
        <p className="p-category">{category}</p>
        <h3 className="p-title">{title}</h3>
        <p className="p-author">{author}</p>
        <div className="buttons-list">
          <Link to={`/add-comment/${bookId}`}>Comments |</Link>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(bookId));
            }}
          >
            Remove |
          </button>
          <Link to={`/update-book/${bookId}`}>Edit |</Link>
        </div>
      </div>
      <div className="progress-status">
        <div className="circle-progress" />
        <div className="stat">
          <h4>64%</h4>
          <p>Completed</p>
        </div>

      </div>
      <div className="vertical-line" />
      <div className="chapter-info">
        <p className="p-current">
          CURRENT CHAPTER:
          {currChapters}
        </p>
        <p className="p-chapter">
          Total Chapters:
          {totChapters}
        </p>
        <button type="button" className="progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  currChapters: PropTypes.number.isRequired,
  totChapters: PropTypes.number.isRequired,
};

export default Book;
