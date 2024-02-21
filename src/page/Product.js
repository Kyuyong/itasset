
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import ProductContent from '../components/ProductContent';
import ProductReviews from '../components/ProductReviews';

import { Row, Col, Button } from 'react-bootstrap';

const Product = (props) => {
  let { id } = useParams();
  const [showReviews, setShowReviews] = useState(false); // 리뷰 보기 상태 관리


  let findItem = props.sol_data.find(function (sol_data) {
    return sol_data.id === id;
  });



  return (
    <div >
      <Container className="main-container">
        <div className="main-box">
          <div className="product-bg" />
          <div className="product-container">
            <Row>
              <Col md={8}>
                <div className="product-left" style={{ display: 'flex', justifyContent: 'center' }} >
                  <div className="vertical-center product-img" >
                    <img src={process.env.PUBLIC_URL + "/image/solution/solution" + findItem.id + ".png"} alt="newsolution-box" />
                    <div className="gap-20" />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                      <span>
                        <Button variant="light product-btn">
                          <span>
                            <img style={{ height: '30px', width: '30px' }}
                              src={process.env.PUBLIC_URL + "/image/icons/monitor-icon.png"}
                              alt="github-mark" />
                          </span>
                          <span>
                            <a href={findItem.url} style={{ marginLeft: "10px" }}>시스템 바로가기</a>
                          </span>
                        </Button>
                        <Button variant="outline-light product-btn">
                          <span>
                            <img style={{ height: '26px', width: '26px' }}
                              src={process.env.PUBLIC_URL + "/image/icons/github-mark.png"}
                              alt="github-mark" />
                          </span>
                          <span>
                            <a href={findItem.github_url} style={{ marginLeft: "10px" }}  > GitHub Code</a>
                          </span>
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="product-left vertical-center" style={{ textAlign: 'center' }}>
                  <p className="product-title">{findItem.sol_name}</p>
                  <p className="product-title-fullname">{findItem.sol_full_name}</p>
                  <p className="product-titlekr">{findItem.kor_name}</p>
                  <div className="gap-20" />
                  <div>
                    <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
                    <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
                    <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
                    <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
                    <BsFillStarFill style={{ color: '#EFC42D', margin: '2px' }}></BsFillStarFill>
                    <span> 4,905 (551 Reviews)</span>
                  </div>
                  <hr />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <span>
                      <Button variant="light product-btn" onClick={() => setShowReviews(!showReviews)}>
                        {showReviews ? 'Solution 소개' : 'Reviews 보기'}
                      </Button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {showReviews ? <ProductReviews /> : <ProductContent sol_data={props.sol_data} />}
      </Container>
      <div className="gap-60" />
    </div>
  );
};

export default Product;