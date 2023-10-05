import React from 'react';
import { Nav } from 'react-bootstrap';

function CustomNavbar({ logoText, menuItems, bgColor }) {
  return (
    <div className="middle-navbar">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item className="middle-menu-icon">
          <Nav.Link>
            <img src={process.env.PUBLIC_URL + "/image/icons/menu_icon_50px.png"} alt="menu_icon" />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link to="/">All</Nav.Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Nav.Link eventKey="link-1">RM</Nav.Link>
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