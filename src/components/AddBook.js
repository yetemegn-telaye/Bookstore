import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  Form, Row, Col, FloatingLabel,
} from 'react-bootstrap';
import { addBook } from '../redux/books/books';
import '../styles/addBook.css';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [currChapters, setCurrChapters] = useState(0);
  const [totChapters, setTotChapters] = useState(0);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const handleAddClick = () => {
    const newBook = {
      itemId: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      currChapters,
      totChapters,
      category,
    };
    dispatch(addBook(newBook));
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#currChapters').value = '';
    document.querySelector('#totChapters').value = '';
  };
  return (
    <>
      <h3 className="form-title">Add new Book</h3>
      <Form className="add-book-form">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Book Title"
              className="mb-3"
            >
              <Form.Control type="text" name="title" id="title" onChange={(e) => setBookTitle(e.target.value)} />
            </FloatingLabel>
            {/* <input type="text" className="title-input" placeholder="Book Title"
             name="title" id="title" onChange={(e) => setBookTitle(e.target.value)} /> */}
          </Col>
          <Col>
            <FloatingLabel
              controlId="author-input"
              label="Author"
              className="mb-3"
            >
              <Form.Control type="text" name="author" id="author" onChange={(e) => setBookAuthor(e.target.value)} />
            </FloatingLabel>
            {/* <input type="author" className="author-input" placeholder="Author"
             name="author" id="author" onChange={(e) => setBookAuthor(e.target.value)} /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <select className="category-input" name="category"
             id="category" onChange={(e) => setCategory(e.target.value)}>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Mystery">Mystery</option>
              <option value="Novel">Novel</option>
            </select> */}
            <Form.Select aria-label="Category" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
              <option>Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Romance">Romance</option>
              <option value="Horror">Horror</option>
              <option value="Thriller">Thriller</option>
              <option value="Mystery">Mystery</option>
              <option value="Novel">Novel</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <input type="number" className="currChapters-input" placeholder="Current Chapter" name="currChapters" id="currChapters" onChange={(e) => setCurrChapters(e.target.value)} />
          </Col>
          <Col>
            <input type="number" className="totChapters-input" placeholder="Total Chapters" name="totChapters" id="totChapters" onChange={(e) => setTotChapters(e.target.value)} />
          </Col>
        </Row>
        <button
          type="button"
          className="add-book-btn"
          onClick={handleAddClick}
        >
          Add Book
        </button>

      </Form>
    </>
  );
};
export default AddBook;
