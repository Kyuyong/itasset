import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import Recommend from '../components/Recommend';

const Main = (props) => {
  const sol_data = props.sol_data;
  const developer_data = props.developer_data;

  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-30" />
        <Recommend sol_data={sol_data} developer_data={developer_data} />
      </Container>
      <Outlet />
    </div>
  );
};

export default Main;