// import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import IntroductionCard from '../components/IntroductionCard';

const Introduction = (props) => {
  const sol_data = props.sol_data;

  return (
    <div>
      <Container className="main-container">
        <div className="main-box">
          <div className="introduction-bg">
            <img src={process.env.PUBLIC_URL + "/image/main/introduction_main_01.png"} alt="introduction_main" />
          </div>
          <div className="mt-5">
            <Row>
              <Col md={6}>
                <div className="main-text">
                  <div className="vertical-center">
                    <h1>Creative AI/DT Solution Courses</h1>
                    <div className="gap-20" />
                    <p>
                      ‘23년 새로운 AI/DT Solution 및 과제를 소개합니다.
                    </p>
                    <hr />
                    <p>No. 1 기술전문회사로 도약하기 위해서 우리의 본업인 현장 경쟁력 강화를 위해 AI/DT전문가 양성하였습니다. <br></br>
                      우리 회사 IT 전문가들의 잠재능력을 유감없이 보여주는 여러가지 사례와 과제들을 확인해보세요.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="introduction-contentsbox">
          <h4>AI/DT Working Group Solution</h4>
          <p>'23년 30명의 AI/DT 전문가가 만든 과제를 소개합니다.</p>
          {sol_data.map((item) => (
            <IntroductionCard
              key={item.id}
              id={item.id}
              solName={item.sol_name}
              solFullName={item.sol_full_name}
              korName={item.kor_name}
              developer={item.developer}
            />
          ))}

        </div>

        <div className="gap-60" />
        <div className="gap-60" />
        <div className="gap-60" />
        <div className="gap-60" />
        <div className="gap-60" />
        <div className="gap-60" />



      </Container>

    </div>
  );
};

export default Introduction;


