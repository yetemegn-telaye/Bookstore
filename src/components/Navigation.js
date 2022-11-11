import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <h1>Bookstore</h1>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </nav>
);

export default Navigation;
