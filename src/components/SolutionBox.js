import { Row, Col, Image } from 'react-bootstrap';

const SolutionBox = ({ id, solName, solFullName, korName, url }) => {
  return (

    <div className="solution-img">
      <img src={process.env.PUBLIC_URL + "/image/solution/solution" + id + ".png"} alt="newsolution-box" />
      <div className="overlay-icons">
        <div className="vertical-center text-center">
          <Row>
            <Col md={3}></Col>
            <Col md={3}>
              <a href={url}>
                <Image src={process.env.PUBLIC_URL + "/image/icons/live_preview.png"} alt="solution-link" />
                <p style={{ color: "white" }}>Live Preview</p>
              </a>
            </Col>
            <Col md={3}>
              <a href={"/product/" + id}>
                <Image src={process.env.PUBLIC_URL + "/image/icons/more_detail.png"} alt="solution-info" />
                <p>More detail</p>
              </a>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
      </div>
      <p className="solution-title">{solName}</p>
      <p className="solution-title-fullname">{solFullName}</p>
      <p className="solution-titlekr">{korName}</p>
    </div>
  );
}

export default SolutionBox;