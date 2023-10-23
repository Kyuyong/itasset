import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';

const Infra = () => {
  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-60" />
        <h1>RM Page</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
        <Link to="/">Home</Link>
        <div className="gap-60" />
      </Container>
    </div>
  );
};

export default Infra;