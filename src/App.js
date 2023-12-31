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
import Product from './page/Product';

// Solution data 불러오기
import sol_data from './json/solutiondata.json';
// import data from './data.js';
// import Detail from './Detail.js';

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
          {/* <Route path="/product/:id" element={<Product sol_data={sol_data} />}></Route> */}

          <Route path="/product/:id" element={<Product sol_data={sol_data} />} />

          {/* <Route>
            <Route path="/detail/:id" element={<Detail data={data} />} />
          </Route> */}
        </Routes>




        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;


