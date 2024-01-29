import './App.css';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './page/Footer'
import React from 'react';

// Page import 대상 리스트
import All from './page/All';
import Main from './page/Main';
import Access from './page/Access';
import AssetMgmt from './page/AssetMgmt';
import Infra from './page/Infra';
import Mgmt from './page/Mgmt';
import RM from './page/RM';
import SOMgmt from './page/SOMgmt';
import Wire from './page/Wire';
import Product from './page/Product';
import Introduction from './page/Introduction';
import ScrollToTop from './components/ScrollToTop';

// Solution data 불러오기
import sol_data from './json/solutiondata.json';
import developer_data from './json/developerdata.json';

function App() {
  return (
    <>
      <Container className="main-container">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Main sol_data={sol_data} developer_data={developer_data} />}></Route>
          <Route path="/all" element={<All sol_data={sol_data} />}></Route>
          <Route path="/rm" element={<RM sol_data={sol_data} />}></Route>
          <Route path="/access" element={<Access sol_data={sol_data} />}></Route>
          <Route path="/wire" element={<Wire sol_data={sol_data} />}></Route>
          <Route path="/infra" element={<Infra sol_data={sol_data} />}></Route>
          <Route path="/assetmgmt" element={<AssetMgmt sol_data={sol_data} />}></Route>
          <Route path="/somgmt" element={<SOMgmt sol_data={sol_data} />}></Route>
          <Route path="/mgmt" element={<Mgmt sol_data={sol_data} />}></Route>
          <Route path="/product/:id" element={<Product sol_data={sol_data} />} />
          <Route path="/introduction" element={<Introduction sol_data={sol_data} />}></Route>
        </Routes>
        <Outlet />
        <ScrollToTop />
      </Container>
      <Footer />
    </>
  );
}

export default App;
