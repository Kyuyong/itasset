

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Recommend() {
  return (
    <div>
      <div className="title-text" >New Solution</div>
      <Row>
        <Col md={4}>
          <div className="newsolution-box">
            <div className="circle-img">
              <img src={process.env.PUBLIC_URL + "/image/main/circle_01.png"} alt="circle_01" />
            </div>
            <p className="box-text">새로운 AI/DT Solution을 <br></br> 만나보세요.</p>
            <p className="box-textsub">The Best AI/DT Solution and System have arrived.</p>
            <button type="button" class="btn btn-light newsolution-btn">See all products</button>
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6} className="solution-img">
              <div>
                <img src={process.env.PUBLIC_URL + "/image/solution/solution01.png"} alt="newsolution-box" />
                <p className="solution-title">DPRS</p>
                <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                <p className="solution-titlekr">재난 예방복구 시스템</p>
              </div>
            </Col>

            <Col md={6} className="solution-img">
              <div>
                <div className="solution-img-wrapper">
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution02.png"} alt="newsolution-box" />
                  <div className="solution-img-link">
                    <p>test</p>
                  </div>
                </div>

                <p className="solution-title">DPRS</p>
                <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                <p className="solution-titlekr">재난 예방복구 시스템</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="solution-img">
              <div>
                <img src={process.env.PUBLIC_URL + "/image/solution/solution03.png"} alt="newsolution-box" />
                <p className="solution-title">DPRS</p>
                <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                <p className="solution-titlekr">재난 예방복구 시스템</p>
              </div>
            </Col>
            <Col md={6} className="solution-img">
              <div>
                <img className="solution-link" src={process.env.PUBLIC_URL + "/image/solution/solution04.png"} alt="newsolution-box" />
                <p className="solution-title">DPRS</p>
                <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                <p className="solution-titlekr">재난 예방복구 시스템</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="gap-30" />
      <div className="main-banner">
        <p className="box-text">Creative AI/DT Solution Courses</p>
        <p className="box-textsub">‘23년 새로운 AI/DT Solution 및 과제를 소개합니다.</p>
        <hr className="banner-line" />
        <p className="box-textsub"> No. 1 기술전문회사로 도약하기 위해서 우리의 본업인 현장 경쟁력 강화를 위해 AI/DT전문가 양성하였습니다. <br></br>
          우리 회사 IT 전문가들의 잠재능력을 유감없이 보여주는 여러가지 사례와 과제들을 확인해보세요.</p>
        <button type="button" class="btn btn-danger banner-btn">
          <Link to="/introduction" className="banner-link">See More</Link>
        </button>
      </div>
      <div className="gap-30" />

      <div>
        <div className="title-text" >Most Popular AI/DT Solution</div>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={6} className="solution-img">
                <div>
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution01.png"} alt="newsolution-box" />
                  <p className="solution-title">DPRS</p>
                  <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                  <p className="solution-titlekr">재난 예방복구 시스템</p>
                </div>
              </Col>
              <Col md={6} className="solution-img">
                <div>
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution02.png"} alt="newsolution-box" />
                  <p className="solution-title">DPRS</p>
                  <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                  <p className="solution-titlekr">재난 예방복구 시스템</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="solution-img">
                <div>
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution03.png"} alt="newsolution-box" />
                  <p className="solution-title">DPRS</p>
                  <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                  <p className="solution-titlekr">재난 예방복구 시스템</p>
                </div>
              </Col>
              <Col md={6} className="solution-img">
                <div>
                  <img src={process.env.PUBLIC_URL + "/image/solution/solution04.png"} alt="newsolution-box" />
                  <p className="solution-title">DPRS</p>
                  <p className="solution-title-fullname">Disaster Prevention & Recovery System</p>
                  <p className="solution-titlekr">재난 예방복구 시스템</p>
                </div>
              </Col>
            </Row>

          </Col>
          <Col md={4}>
            <div className="mostpopular-box">
              <div className="circle-img">
                <img src={process.env.PUBLIC_URL + "/image/main/circle_02.png"} alt="circle_01" />
              </div>
              <p className="box-text">인기있는 AI/DT Solution을 <br></br> 만나보세요.</p>
              <p className="box-textsub">The Best Solutions and System have arrived.</p>
              <button type="button" class="btn btn-light mostpopular-btn">See all products</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="gap-60" />
      <hr />
      <div className="gap-30" />
      <Row>
        <Col md={3}>
          <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
          <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
          <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
          <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
          <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
          <p className="joinus-title">Join Us!</p>
          <p>SK오앤에스는 250명의 AI/DT전문가와 함께 성장하고 있습니다.
            현장 업무에 필요한 여러가지 아이디어 발굴을 통해서,
            새로운 New Vision과 Value 찾아가는데 노력을 하고 있습니다.
            언제든지 AI/DT전문가의 능력이 필요하면 연락주세요.</p>
        </Col>
        <Col md={3}>
          <div className="joinus-box">
            <Image src={process.env.PUBLIC_URL + "/image/main/person01.jpg"} className="person-circle" roundedCircle />
            <p>Lorem ipsum dolor sit amet consectetur. Lectus at sagittis est fermentum ipsum mi. Integer nec nisl
              dignissim eu quam feugiat magna semper. </p>
            <p className="person-name">김용욱</p>
            <p classNmae="person-team">AI/DT추진팀</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="joinus-box">
            <Image src={process.env.PUBLIC_URL + "/image/main/person02.jpg"} className="person-circle" roundedCircle />
            <p>Lorem ipsum dolor sit amet consectetur. Lectus at sagittis est fermentum ipsum mi. Integer nec nisl
              dignissim eu quam feugiat magna semper. </p>
            <p className="person-name">박정현</p>
            <p classNmae="person-team">인천품질혁신팀</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="joinus-box">
            <Image src={process.env.PUBLIC_URL + "/image/main/person03.jpg"} className="person-circle" roundedCircle />
            <p>Lorem ipsum dolor sit amet consectetur. Lectus at sagittis est fermentum ipsum mi. Integer nec nisl
              dignissim eu quam feugiat magna semper. </p>
            <p className="person-name">송건우</p>
            <p classNmae="person-team">충북품질혁신팀</p>
          </div>
        </Col>
      </Row>
      <div className="gap-60" />
      <div className="gap-60" />
    </div>
  );
}

export default Recommend;