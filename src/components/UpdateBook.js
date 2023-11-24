import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdateBook = () => {
  const bookId = useParams();
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <h1>
        Update Book
        {' '}
        {bookId.bookId}
      </h1>
      <div>
        {Object.entries(books).map(([id, book]) => {
          if (id === bookId.bookId) {
            return (
              <div key={id}>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
                <h2>{book.category}</h2>
                <h2>{book.currChapters}</h2>
                <h2>{book.totChapters}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>
      <form>
        <div className="form-inputs">
          <input type="text" placeholder="Title" name="title" id="title" />
          <input type="text" placeholder="Author" name="author" id="author" />
          <select className="category-input" name="category" id="category">
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Romance">Romance</option>
            <option value="Horror">Horror</option>
            <option value="Thriller">Thriller</option>
            <option value="Mystery">Mystery</option>
            <option value="Novel">Novel</option>
          </select>
          <input type="text" placeholder="Current Chapter" name="currChapters" id="currChapters" />
          <input type="text" placeholder="Total Chapters" name="totChapters" id="totChapters" />
        </div>
        <button type="button" className="add-book-btn" onClick={() => console.log(books)}>Update Book</button>
      </form>
    </>
  );
};
export default UpdateBook;
