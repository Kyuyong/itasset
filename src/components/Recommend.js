

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SolutionBox from './SolutionBox';


function Recommend(props) {
  const sol_data = props.sol_data;
  // const developer_data = props.developer_data;

  const randomIds = getRandomIds(props.developer_data, 3);
  const filteredData = props.developer_data.filter(item => randomIds.includes(item.id));

  // 배열에서 랜덤으로 특정 개수의 요소를 추출하는 함수
  function getRandomIds(array, size) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size).map(item => item.id);
  }

  return (
    <div>
      <div className="gap-20" />
      <div>
        <div className="title-text" >New Solution</div>
        <div className="title-text-sub" >새로운 AI/DT Solution를 공유합니다.</div>
      </div>
      <Row>
        <Col md={4}>
          <div className="newsolution-box">
            <div className="circle-img">
              <img className="animation-updown" src={process.env.PUBLIC_URL + "/image/main/circle_01.png"} alt="circle_01" />
            </div>
            <p className="box-text">새로운 AI/DT Solution을 <br></br> 만나보세요.</p>
            <p className="box-textsub">The Best AI/DT Solution and System have arrived.</p>
            <button type="button" class="btn btn-light newsolution-btn">See all products</button>
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <SolutionBox
                id={sol_data[0].id}
                solName={sol_data[0].sol_name}
                solFullName={sol_data[0].sol_full_name}
                korName={sol_data[0].kor_name}
              />
            </Col>
            <Col md={6}>
              <SolutionBox
                id={sol_data[1].id}
                solName={sol_data[1].sol_name}
                solFullName={sol_data[1].sol_full_name}
                korName={sol_data[1].kor_name}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <SolutionBox
                id={sol_data[3].id}
                solName={sol_data[3].sol_name}
                solFullName={sol_data[3].sol_full_name}
                korName={sol_data[3].kor_name}
              />
            </Col>
            <Col md={6}>
              <SolutionBox
                id={sol_data[4].id}
                solName={sol_data[4].sol_name}
                solFullName={sol_data[4].sol_full_name}
                korName={sol_data[4].kor_name}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="gap-30" />
      <hr />
      <div className="gap-20" />
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
        <div>
          <div className="title-text" >Most Popular AI/DT Solution</div>
          <div className="title-text-sub" >인기가 있고, 사용률이 높은 Solution입니다.</div>
        </div>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <SolutionBox
                  id={sol_data[2].id}
                  solName={sol_data[2].sol_name}
                  solFullName={sol_data[2].sol_full_name}
                  korName={sol_data[2].kor_name}
                />
              </Col>
              <Col md={6}>
                <SolutionBox
                  id={sol_data[3].id}
                  solName={sol_data[3].sol_name}
                  solFullName={sol_data[3].sol_full_name}
                  korName={sol_data[3].kor_name}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <SolutionBox
                  id={sol_data[9].id}
                  solName={sol_data[9].sol_name}
                  solFullName={sol_data[9].sol_full_name}
                  korName={sol_data[9].kor_name}
                />
              </Col>
              <Col md={6}>
                <SolutionBox
                  id={sol_data[7].id}
                  solName={sol_data[7].sol_name}
                  solFullName={sol_data[7].sol_full_name}
                  korName={sol_data[7].kor_name}
                />
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="mostpopular-box">
              <div className="circle-img">
                <img className="animation-updown" src={process.env.PUBLIC_URL + "/image/main/circle_02.png"} alt="circle_01" />
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
          <p className="joinus-title">AI/DT 개발자를 소개합니다.</p>
          <p>SK오앤에스는 40명의 AI/DT전문가와 함께 성장하고 있습니다.
            현장 업무에 필요한 여러가지 아이디어 발굴을 통해서,
            새로운 New Vision과 Value 찾아가는데 노력을 하고 있습니다.
            언제든지 AI/DT전문가의 능력이 필요하면 연락주세요.</p>
        </Col>

        {filteredData.map((developer) => (
          <Col md={3} key={developer.id}>
            <div className="joinus-box">
              <Image src={process.env.PUBLIC_URL + "/image/developer/" + developer.n_id + ".jpg"} className="person-circle" roundedCircle />
              <p>{developer.comment}</p>
              <p className="person-name">{developer.developer}</p>
              <p className="person-team">{developer.team}</p>
            </div>
          </Col>
        ))}
      </Row>

      <div className="gap-60" />
      <div className="gap-60" />
    </div>
  );
};


export default Recommend;