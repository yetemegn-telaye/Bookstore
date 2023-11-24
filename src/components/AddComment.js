import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddComment = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState([]);
  const bookId = useParams();

  const handleAddComment = () => {
    alert(name, comment, bookId);
  };

  return (
    <>
      <h1>Add Comment</h1>
      <form>
        <div className="form-inputs">
          <input type="text" placeholder="Name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Comment" name="comment" id="comment" onChange={(e) => setComment(e.target.value)} />
        </div>
        <button type="button" className="add-comment-btn" onClick={handleAddComment}>Add Comment</button>
      </form>
    </>
  );
};

export default AddComment;
