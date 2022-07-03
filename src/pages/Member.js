import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { FaUser } from 'react-icons/fa';
import Profile from '../components/Member/Profile';
import Favorite from '../components/Member/Favorite';

function Member() {
  const [active, setActive] = useState('first');
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (active === 'first') {
      setTitle('帳戶資訊');
    } else if (active === 'second') {
      setTitle('訂單紀錄');
    } else if (active === 'third') {
      setTitle('最愛收藏');
    } else if (active === 'fourth') {
      setTitle('優惠卷');
    }
  }, [active]);

  return (
    <>
      <div className="container-fluid member">
        <Tab.Container
          id="left-tabs-example"
          activeKey={active}
          onSelect={(e) => {
            setActive(e);
          }}
        >
          <Row className="justify-content-center">
            <Col sm={9}>
              <h3 className="my-5 text-primary">{title}</h3>
            </Col>
          </Row>
          <Row className="gap-5 justify-content-center">
            <Col sm={2} className="text-center me-3">
              <div className="member-info mx-auto pb-4">
                <div className="bg-primary text-white py-2 mb-3">
                  <FaUser />
                  <span>用戶資訊</span>
                </div>
                <div>
                  <figure className="circle mx-auto">
                    <img
                      src={require('../images/dr_strange.jpg')}
                      alt="..."
                      className="object-cover"
                    />
                  </figure>
                </div>
                <p className="text-primary fs-5 mb-1">潘奕辰</p>
                <p className="text-content mb-1">0932645789</p>
                <p className="text-content">Eason@test.com</p>
                <hr className="w-75 mx-auto mb-2"></hr>
                <Nav className="flex-column gap-3 h5">
                  <Nav.Item>
                    <Nav.Link eventKey="first">帳戶資訊</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">訂單紀錄</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">最愛收藏</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">優惠卷</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Profile />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div>歷史訂單</div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Favorite />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div>優惠卷</div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Member;
