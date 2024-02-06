import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BsFillHouseDoorFill, BsFillPersonFill, BsFillGearFill, BsClipboardFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function CustomNavbar({ logoText, menuItems, bgColor }) {
  return (
    <Navbar bg="transparent" expand="lg" className="main-navbar">

      <Navbar.Brand>
        <Link to="/" className="logo">IT Asset</Link>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="d-flex flex-column align-items-center main-nav">
            <BsFillHouseDoorFill size={24} />
            <span>Home</span>
          </Nav.Link>
          <Nav.Link href="/" className="d-flex flex-column align-items-center main-nav">
            <BsFillPersonFill size={24} />
            <span>Work</span>
          </Nav.Link>
          <Nav.Link href="/" className="d-flex flex-column align-items-center main-nav">
            <BsFillGearFill size={24} />
            <span>Setting</span>
          </Nav.Link>
          <Nav.Link href="/" className="d-flex flex-column align-items-center main-nav">
            <BsClipboardFill size={24} />
            <span>Login</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default CustomNavbar;