import React, { Component } from 'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <h3>Add new Book</h3>
        <input type="text" placeholder="Book Title" />
        <input type="author" placeholder="Author" />
        <button type="button">Add Book</button>
      </form>
    );
  }
}
export default AddBook;
