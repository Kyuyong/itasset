import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333333', color: 'white',
    textAlign: 'center', padding: '20px 0'
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Nav variant="pills" className="justify-content-center">
          <Nav.Item >
            <Nav.Link eventKey="link-1" className="footermenu">회사소개</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-2" className="footermenu">i-net</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-3" className="footermenu">SKO Store</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-4" className="footermenu">Oasis</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-5" className="footermenu">TANGO</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="link-6" className="footermenu">NAMS</Nav.Link>
          </Nav.Item>
        </Nav>
        <hr style={{ borderColor: 'white' }} />
        <Row>
          <Col md={4}>
            <div style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: '0' }}>
              <p>IT Asset <br></br> Create AI/DT </p>

            </div>
          </Col>
          <Col md={8}>
            <p>(주)SK오앤에스 <br></br>
              서울특별시 영등포구 선유로49길 23 아이에스비즈타워2차 9층</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
