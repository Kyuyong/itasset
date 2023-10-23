import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <div className="middle-navbar">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item className="middle-menu-icon">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/image/icons/menu_icon_50px.png"} alt="menu_icon" />
          </Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/all" className="link-title">All Solution</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/rm" className="link-title">RM</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/access" className="link-title">Access</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/wire" className="link-title">전송</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/infra" className="link-title">Infra설비</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/assetmgmt" className="link-title">자산</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/somgmt" className="link-title">SO</Link>
        </Nav.Item>
        <Nav.Item className="middle-box">
          <Link to="/mgmt" className="link-title">경영</Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default CustomNavbar;