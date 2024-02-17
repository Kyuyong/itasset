
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';
// import SolutionBox from '../components/SolutionBox';
import ProductContent from '../components/ProductContent';

import { Row, Col, Button } from 'react-bootstrap';

const Product = (props) => {
  let { id } = useParams();

  let findItem = props.sol_data.find(function (sol_data) {
    return sol_data.id === id;
  });


  // 3개의 랜덤 아이디를 추출
  // const randomIds = getRandomIds(props.sol_data, 3);
  // const filteredData = props.sol_data.filter(item => randomIds.includes(item.id));

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
                      <Button variant="light product-btn">Reviews 보기</Button>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <ProductContent sol_data={props.sol_data} />
        {/* 
        <div className="product-contentsbox">
          <div className="product-contentcontainer">
            <Row>
              <Col md={8}>
                <div>
                  <div className="gap-60"></div>
                  <h2>Product description</h2>
                  <div className="gap-40"></div>
                  <h4>배경 및 목적</h4>
                  <p>
                    Material Dashboard 2 React is our newest free MUI Admin Template based on React.
                    If you’re a developer looking to create an admin dashboard that is developer-friendly,
                    rich with features, and highly customisable,
                    here is your match. Our innovative MUI & React dashboard comes with a beautiful design inspired by Google's Material Design
                    and it will help you create stunning websites & web apps to delight your clients.
                  </p>
                </div>
                <div>
                  <div className="gap-40"></div>
                  <h4>추진 방향</h4>
                  <p>
                    Each element is well presented in very complex documentation.
                    You can read more about the documentation here.
                    If you want to get inspiration or just show something directly to your clients,
                    you can jump-start your development with our pre-built example pages.
                    You will be able to quickly set up the basic structure for your web project.
                  </p>
                </div>
                <div>
                  <div className="gap-40"></div>
                  <h4>활용 대상</h4>
                  <p>
                    If you want to get inspiration or just show something directly to your clients,
                    you can jump-start your development with our pre-built example pages.
                    You will be able to quickly set up the basic structure for your web project.
                    If you want to get inspiration or just show something directly to your clients,
                    you can jump-start your development with our pre-built example pages.
                    You will be able to quickly set up the basic structure for your web project.
                    If you want to get inspiration or just show something directly to your clients,
                    you can jump-start your development with our pre-built example pages.
                    You will be able to quickly set up the basic structure for your web project.
                  </p>
                </div>
                <div>
                  <div className="gap-40"></div>
                  <h4>기대 효과</h4>
                  <p>
                    During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:
                    MUI - The React UI library for faster and easier web development.
                    React ChartJS 2 - Simple yet flexible React charting for designers & developers.
                    ChromaJS - A small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
                    Nepcha Analytics for the analytics tool. Nepcha is already integrated with this template. You can use it to gain insights into your sources of traffic.
                  </p>
                </div>
                <div className="gap-60"></div>

              </Col>
              <Col md={4}>
                <div style={{ textAlign: 'center', margin: 30 }}>
                  <div>
                    <Image src={process.env.PUBLIC_URL + "/image/developer/" + findItem.n_id + ".jpg"} className="product-person-circle" roundedCircle />
                    <div>
                      <span style={{ color: '#585858' }}>{findItem.headquarters} </span>
                      <span style={{ color: '#1CA8DB' }}>{findItem.team} </span>
                      <span><h4>{findItem.developer} </h4></span>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <Row style={{ margin: 30 }}>
                      <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + "/image/lang_icons/python.png"} className="product_lang_icons " roundedCircle />
                        <p>python</p>
                      </Col>
                      <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + "/image/lang_icons/django.png"} className="product_lang_icons " roundedCircle />
                        <p>django</p>
                      </Col>
                    </Row>
                  </div>
                  <div style={{ margin: 30 }}>
                    <Row style={{ margin: 10 }}>
                      <Col md={6} >Version</Col>
                      <Col md={6} style={{ textAlign: 'left' }}>1.0.2</Col>
                    </Row>
                    <Row style={{ margin: 10 }}>
                      <Col md={6}>Updated</Col>
                      <Col md={6} style={{ textAlign: 'left' }}>2023.08.21</Col>
                    </Row>
                    <Row style={{ margin: 10 }}>
                      <Col md={6}>Released</Col>
                      <Col md={6} style={{ textAlign: 'left' }}>2023.03.05</Col>
                    </Row>
                    <Row style={{ margin: 10 }}>
                      <Col md={6}>Reviews</Col>
                      <Col md={6} style={{ textAlign: 'left' }}>See 551 Reviews</Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gap-60" />
        <div className="gap-60" />
        <hr />
        <div>
          <div className="gap-60" />
          <h2>Other Solutions</h2>
          <Row>
            {filteredData.map((item) => (
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
        </div> */}


      </Container>
      <div className="gap-60" />
    </div>
  );
};
// 배열에서 랜덤으로 특정 개수의 요소를 추출하는 함수
// function getRandomIds(array, size) {
//   const shuffled = array.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, size).map(item => item.id);
// }
export default Product;