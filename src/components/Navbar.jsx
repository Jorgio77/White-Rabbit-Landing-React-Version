import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';


function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
        <Navbar.Brand href="#home" className="brand">
            <img src="images/Logo.svg" alt="logo" className="logo"/>
            White Rabbit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navlink">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#stepOne">How it Works</Nav.Link>
            <Nav.Link href="#cta">Subscribe</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;