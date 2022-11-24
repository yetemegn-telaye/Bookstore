import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
import profileLogo from '../profile-logo.png';

const Navigation = () => (
  <nav>
    <div className="nav-links">
      <h1 className="nav-title">Bookstore CMS</h1>
      <Link to="/" className="route-links">Books</Link>
      <Link to="/categories" className="route-links">Categories</Link>
    </div>
    <img src={profileLogo} alt="profile-logo" />
  </nav>
);

export default Navigation;
