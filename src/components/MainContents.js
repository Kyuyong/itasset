import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

function MainContents() {
  return (
    <div className="main-box">
      <div className="main-bg" />
      <div className="mt-5">
        <Row>
          <Col md={6}>
            <div className="main-text">
              <div className="vertical-center">
                <p className="main-introtext">SK오앤에스의 모든 AI/DT Solution를 <br></br>
                  모두 만나볼 수 있습니다.</p>
                <p>
                  python, tensorflow, javascript, django 등의 여러가지 Language를 활용하여 <br></br>
                  현장에 필요한 Tool 개발하여 제공하고 있습니다.
                </p>
              </div>
              <Form className="d-flex search-form">
                <Form.Control
                  type="search"
                  placeholder="Solution 검색 기능을 제공 예정입니다. (검색기능 미작동 중)"
                  className="me-2"
                  aria-label="Search"
                />
                <Button >
                  <BsSearch size={24} />
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6} className="text-right">
            <div className="main-img vertical-center">
              <img className="animation-updown" src={process.env.PUBLIC_URL + "/image/main/MainTitile.png"} alt="title" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainContents;