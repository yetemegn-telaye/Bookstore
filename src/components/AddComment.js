import React from 'react';
import { useParams } from 'react-router-dom';

const AddComment = () => {
  const bookId = useParams();

  return (
    <>
      <h1>Add Comment</h1>
      <form>
        <div className="form-inputs">
          {bookId}
          <input type="text" placeholder="Name" name="name" id="name" />
          <input type="text" placeholder="Comment" name="comment" id="comment" />
        </div>
        <button type="button" className="add-comment-btn">Add Comment</button>
      </form>
    </>
  );
};

export default AddComment;
