import './App.css';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './page/Footer'

import All from './page/All'
import Main from './page/Main'


function App() {
  return (
    <>
      <Container className="main-container">
        <MainNavbar />

        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/product" element={<div><h1>product</h1></div>} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;


