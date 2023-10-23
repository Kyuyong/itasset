import { Container, Row, Col } from 'react-bootstrap';
import MainContents from '../components/MainContents';
import MiddleNavbar from '../components/MiddleNavbar';

const Access = (props) => {
  const accessdb = props.sol_data.filter(item => item.work_field === "Access");

  return (
    <div>
      <Container className="main-container">
        <MainContents />
        <MiddleNavbar />
        <div className="gap-60" />
        <div className="title-text">Access AI/DT Solution</div>
        <div className="gap-20" />
        <div>
          <Row>
            {accessdb.map((item) => (
              <Col md={4} className="solution-img" key={item.id}>
                <div>
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution" + item.id + ".png"} alt="newsolution-box" />
                  <p className="solution-title">{item.sol_name}</p>
                  <p className="solution-title-fullname">{item.sol_full_name}</p>
                  <p className="solution-titlekr">{item.kor_name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="gap-60" />


      </Container>
    </div>
  );
};


export default Access;