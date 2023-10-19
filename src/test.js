import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import MainNavbar from './components/MainNavbar';
import MiddleNavbar from './components/MiddleNavbar';
import MainContents from './components/MainContents';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './page/Footer'
import Rm from './page/RM'
import All from './page/All'
import Main from './page/Main'

function App() {
  return (
    <>
      <Container className="main-container">
        <MainNavbar />
      </Container>

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




