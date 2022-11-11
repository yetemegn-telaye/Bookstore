import React, { Component } from 'react';
import AddBook from './AddBook';
import Book from './Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <Book title="Hunger Games" author="Suzzane Collins" />
        <Book title="Harry Potter" author="J.K. Rowling" />
        <Book title="Hunger Games" author="Suzzane Collins" />
        <Book title="Harry Potter" author="J.K. Rowling" />
        <AddBook />
      </div>
    );
  }
}
export default Books;
