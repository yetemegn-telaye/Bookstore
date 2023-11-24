import React from 'react';

const UpdateBook = () => (
  <>
    <h1>Update Book</h1>
    <form>
      <div className="form-inputs">
        <input type="text" placeholder="Title" name="title" id="title" />
        <input type="text" placeholder="Author" name="author" id="author" />
        <input type="text" placeholder="Category" name="category" id="category" />
      </div>
      <button type="button" className="add-book-btn">Update Book</button>
    </form>
  </>
);
export default UpdateBook;
