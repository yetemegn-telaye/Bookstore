import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddComment = () => {
  const bookId = useParams();
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <h1>Add Comment</h1>
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
          <input type="text" placeholder="Name" name="name" id="name" />
          <input type="text" placeholder="Comment" name="comment" id="comment" />
        </div>
        <button type="button" className="add-comment-btn">Add Comment</button>
      </form>
    </>
  );
};

export default AddComment;
