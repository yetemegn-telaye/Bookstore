import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import profileLogo from '../profile-logo.png';

const Navigation = () => (
  // <nav>
  //   <div className="nav-links">
  //     <h1 className="nav-title">Bookstore CMS</h1>
  //     <Link to="/" className="route-links">Books</Link>
  //     <Link to="/categories" className="route-links">Categories</Link>
  //   </div>
  //   <img src={profileLogo} alt="profile-logo" />
  // </nav>
  <Navbar collapseOnSelect expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home" className="nav-title">BOOK-LOG</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="route-links">Books</Nav.Link>
          <Nav.Link href="/categories" className="route-links">Categories</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#login" className="route-links"> Login</Nav.Link>
          <Nav.Link href="#signup" className="route-links">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
