import { Row, Col, Image } from 'react-bootstrap';
import SolutionBox from '../components/SolutionBox';

function IntroductionCard(props) {
  const { id, solName, solFullName, korName, developer } = props;

  return (
    <div className="introduction-card">
      <Row>
        <Col md={4}>
          <SolutionBox id={id} solName={solName} solFullName={solFullName} korName={korName} />
        </Col>
        <Col md={4}>
          <div style={{ left: '50px', position: 'relative' }}>
            <div className="introduction-description">
              <div className="introduction-description-title"><h3>Product description</h3> </div>
              <div className="introduction-description-contents">
                <p>Material Dashboard 2 React is our newest free MUI Admin Template based on React. If you’re a
                  developer looking to create an admin dashboard that is developer-friendly, rich with features, and
                  highly customisable, here is your match. Our innovative MUI &amp; React dashboard comes with a
                  beautiful design inspired by Google&#39;s Material Design and it will help you create stunning
                  websites &amp; web apps to delight your clients.</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="personcard-box">
            <div className="personcard-ellipse" />
            <div className="personcard-rectangle" />
            <div className="personcard-rectangle-2">
              <Image src={process.env.PUBLIC_URL + "/image/main/person02.jpg"} className="introduction-person-circle " roundedCircle />
              <div className="personcard-nametag">
                <span>Infra AI/DT </span>
                <span style={{ fontSize: '30px', fontWeight: '200' }}>{developer}</span>
              </div>
            </div>
            <div className="personcard-rectangle-3" />
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default IntroductionCard;