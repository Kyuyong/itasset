import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SolutionBox from './SolutionBox';

const SearchSolList = ({ data }) => {

  return (
    <div>
      <div className="gap-20" />
      <h2>검색 결과</h2>
      {data.length > 0 ? (
        <Row>
          {data.map((item) => (
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
      ) : (
        <div style={{ color: '#5a5a5a', fontSize: "18px", padding: "10px" }}>
          검색된 결과가 없습니다. 다시 검색을 해보세요.
        </div>
      )}


      <div className="gap-60" />
    </div>
  );
};

export default SearchSolList;
