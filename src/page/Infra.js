import { Container, Row, Col } from 'react-bootstrap';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';
import SolutionBox from '../components/SolutionBox';

const Infra = (props) => {
  const jsondb = props.sol_data.filter(item => item.work_field === "Infra설비");

  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-60" />
        <div className="title-text">Infra설비 AI/DT Solution</div>
        <div className="gap-20" />
        <div>
          <Row>
            {jsondb.map((item) => (
              <Col md={4} key={item.id}>
                <Col md={4} key={item.id}>
                  <SolutionBox
                    key={item.id}
                    id={item.id}
                    solName={item.sol_name}
                    solFullName={item.sol_full_name}
                    korName={item.kor_name}
                  />
                </Col>
              </Col>
            ))}
          </Row>
        </div>
        <div className="gap-60" />


      </Container>
    </div>
  );
};

export default Infra;