import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';


import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import Recommend from '../components/Recommend';
import SearchSolList from '../components/SearchSolList';


import solutionData from '../json/solutiondata.json';
import developerData from '../json/developerdata.json';
import All from './All'
import RM from './RM';
import Access from './Access';
import Wire from './Wire';
import Infra from './Infra';
import AssetMgmt from './AssetMgmt';
import SOMgmt from './SOMgmt';
import Mgmt from './Mgmt';


const Home = ({ onLogout }) => {

  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (results) => {
    setSearchResults(results);
    navigate('/search');
  };

  const location = useLocation();
  const showRecommend =
    !location.pathname.startsWith('/search')
    && !location.pathname.startsWith('/all')
    && !location.pathname.startsWith('/access')
    && !location.pathname.startsWith('/rm')
    && !location.pathname.startsWith('/wire')
    && !location.pathname.startsWith('/infra')
    && !location.pathname.startsWith('/assetmgmt')
    && !location.pathname.startsWith('/somgmt')
    && !location.pathname.startsWith('/mgmt');


  return (
    <div style={{ width: '1600px', margin: '0 auto' }}>
      <MainContents data={solutionData} onSearch={handleSearch} />
      <MiddleNavbar />
      <Routes>
        {/* <Route path='/search' element={searchResults.length > 0 ? <SearchSolList data={searchResults} /> : <Navigate to="/" />} /> */}
        <Route path='/search' element={<SearchSolList data={searchResults} />} />
        <Route path="/all" element={<All sol_data={solutionData} />} />
        <Route path="/rm" element={<RM sol_data={solutionData} />}></Route>
        <Route path="/access" element={<Access sol_data={solutionData} />}></Route>
        <Route path="/wire" element={<Wire sol_data={solutionData} />}></Route>
        <Route path="/infra" element={<Infra sol_data={solutionData} />}></Route>
        <Route path="/assetmgmt" element={<AssetMgmt sol_data={solutionData} />}></Route>
        <Route path="/somgmt" element={<SOMgmt sol_data={solutionData} />}></Route>
        <Route path="/mgmt" element={<Mgmt sol_data={solutionData} />}></Route>

      </Routes>
      {/* {searchResults.length === 0 && <Recommend sol_data={solutionData} developer_data={developerData} />} */}
      {showRecommend && <Recommend sol_data={solutionData} developer_data={developerData} />}
    </div>
  );
};

export default Home;
