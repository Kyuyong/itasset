import React, { useState } from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import MainNavBar from '../components/MainNavbar';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import SearchSolList from './SearchSolList';
import Footer from '../page/Footer'

import solutionData from '../json/solutiondata.json';

const Main = ({ onLogout }) => {

  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (results) => {
    setSearchResults(results);
    navigate('/search');
  };


  return (
    <div style={{ width: '1600px', margin: '0 auto' }}>ㅡ
      <MainNavBar onLogout={onLogout} />
      <MainContents data={solutionData} onSearch={handleSearch} />
      <MiddleNavbar />
      <Routes>
        <Route path='/search' element={<SearchSolList data={searchResults} />}></Route>
      </Routes>



      {/* <div style={{ height: '3000px', backgroundColor: '#5a5a5a' }}></div> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
