import { Container, Row, Col } from 'react-bootstrap';
// import MainContents from '../components/MainContents';
// import MiddleNavbar from '../components/MiddleNavbar';
import SolutionBox from '../components/SolutionBox';


const Wire = (props) => {
  const jsondb = props.sol_data.filter(item => item.work_field === "전송");

  return (
    <div>
      <Container className="main-container">
        {/* <MainContents />
        <MiddleNavbar /> */}
        <div className="gap-20" />
        <div className="title-text">전송 AI/DT Solution</div>
        <div className="gap-20" />
        <div>
          <Row>
            {jsondb.map((item) => (
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

export default Wire;