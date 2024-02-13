import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';

// Componets List
import MainNavBar from '../components/MainNavbar';
import ScrollToTop from '../components/ScrollToTop';

// Page List
import Home from './Home';
import Product from './Product';
import Footer from '../page/Footer'

import Introduction from './Introduction';

import solutionData from '../json/solutiondata.json';

const Main = ({ onLogout }) => {


  const location = useLocation();
  const showHome =
    !location.pathname.startsWith('/product')
    && !location.pathname.startsWith('/introduction')


  return (
    <>
      <div style={{ width: '1600px', margin: '0 auto', backgroundColor: "#F9F9F9" }}>ㅡ
        <MainNavBar onLogout={onLogout} />
        {showHome && <Home />}
        <Routes>
          <Route path="/product/:id" element={<Product sol_data={solutionData} />} />
          <Route path="/introduction" element={<Introduction sol_data={solutionData} />}></Route>
        </Routes>

        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
