import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

const MainContents = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredResults = data.filter(solution =>
      solution.sol_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      solution.kor_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredResults);
  };


  return (
    <div className="main-box">
      <div className="main-bg" />
      <div className="mt-5">
        <Row>
          <Col md={6}>
            <div className="main-text">
              <div className="vertical-center">
                <p className="main-introtext">SK오앤에스의 모든 AI/DT Solution를 <br></br>
                  모두 만나볼 수 있습니다.</p>
                <p>
                  python, tensorflow, javascript, django 등의 여러가지 Language를 활용하여 <br></br>
                  현장에 필요한 Tool 개발하여 제공하고 있습니다.
                </p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="maininputWrap">
                  <input
                    type="text"
                    placeholder="Solution 이름을 검색하세요."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ flexGrow: 1, padding: '10px', marginRight: '10px' }}
                  />
                </div>
                <Button type="submit"> <BsSearch size={24} /> </Button>
              </form>
            </div>
          </Col>
          <Col md={6} >
            <div className="main-img vertical-center">
              <img className="animation-updown" src={process.env.PUBLIC_URL + "/image/main/MainTitile.png"} alt="title" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MainContents;