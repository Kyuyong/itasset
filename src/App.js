import './App.css';
import { Container } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './page/Footer'

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

// Solution data 불러오기
import sol_data from './json/solutiondata.json';



function App() {
  return (
    <>
      <Container className="main-container">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/all" element={<All sol_data={sol_data} />}></Route>
          <Route path="/rm" element={<RM sol_data={sol_data} />}></Route>
          <Route path="/access" element={<Access sol_data={sol_data} />}></Route>
          <Route path="/wire" element={<Wire sol_data={sol_data} />}></Route>
          <Route path="/infra" element={<Infra sol_data={sol_data} />}></Route>
          <Route path="/assetmgmt" element={<AssetMgmt sol_data={sol_data} />}></Route>
          <Route path="/somgmt" element={<SOMgmt sol_data={sol_data} />}></Route>
          <Route path="/mgmt" element={<Mgmt sol_data={sol_data} />}></Route>
          <Route path="/product" element={<div><h1>product</h1></div>} />
        </Routes>

        {/* <div>
          {sol_data.map((item) => (
            <div className="card" key={item.id}>
              <h2>{item.sol_name}</h2>
              <p>{item.kor_name}</p>
              <p>Developer: {item.developer}</p>
              <p>Headquarters: {item.headquarters}</p>
              <p>Team: {item.team}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div> */}
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;


