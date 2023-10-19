import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import Recommend from '../components/Recommend';

const Main = () => {
  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-60" />
        <Recommend />
      </Container>
      <Outlet />
    </div>
  );
};

export default Main;