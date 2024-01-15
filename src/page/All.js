import { Container, Row, Col } from 'react-bootstrap';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import SolutionBox from '../components/SolutionBox';

const All = (props) => {

  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-60" />
        <div className="title-text">전체 AI/DT Solution</div>
        <div className="gap-20" />
        <div>
          <Row>
            {props.sol_data.map((item) => (
              <Col md={4} key={item.id}>
                <SolutionBox
                  key={item.id}
                  id={item.id}
                  solName={item.sol_name}
                  solFullName={item.sol_full_name}
                  korName={item.kor_name}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className="gap-60" />


      </Container>
    </div>
  );
};

export default All;