import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar({ logoText, menuItems, bgColor }) {
  return (
    <div className="middle-navbar">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item className="middle-menu-icon">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/image/icons/menu_icon_50px.png"} alt="menu_icon" />
          </Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/all">All</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/rm">RM</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-2" >Access</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-3" >전송</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-4" >Infra설비</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-5" >자산</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-6" >SO</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-7" >경영</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default CustomNavbar;