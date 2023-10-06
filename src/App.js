import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import MainNavbar from './components/MainNavbar';
import MiddleNavbar from './components/MiddleNavbar';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './page/Footer'
import Rm from './page/RM'
import All from './page/All'
import Home from './page/Home'

function App() {
  return (
    <>
      <Container className="main-container">
        <MainNavbar />
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
                      placeholder="원하는 검색어를 입력해주세요."
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
                  <img src={process.env.PUBLIC_URL + "/image/main/MainTitile.png"} alt="title" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <MiddleNavbar />
      </Container>
      <div className='gap-60' />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/rm" element={<Rm />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
