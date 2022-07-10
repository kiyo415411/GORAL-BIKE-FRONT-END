import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Collapse from '@mui/material/Collapse';
import { FaUser } from 'react-icons/fa';
import Profile from '../components/Member/Profile';
import OrderList from '../components/Member/OrderList';
import FavoriteProduct from '../components/Member/FavoriteProduct';
import FavoriteCourse from '../components/Member/FavoriteCourse';
import FavoriteActivity from '../components/Member/FavoriteActivity';
import Coupon from '../components/Member/Coupon';
import { useLogin } from '../utils/useLogin';
import { IMAGE_URL } from '../utils/config';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import OrderDetail from '../components/Member/OrderDetail';

function Member() {
  const history = useNavigate();
  const [active, setActive] = useState('first');
  const [title, setTitle] = useState('');
  const [open, setOpen] = React.useState(false);
  const { userData, setUserData, setIsLogin } = useLogin();
  const { name, email, phone, photo } = userData;
  const location = useLocation();
  // console.log(location);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (location.pathname.includes('product')) {
      setActive('product');
      return;
    } else if (location.pathname.includes('course')) {
      setActive('course');
      return;
    } else if (location.pathname.includes('activity')) {
      setActive('activity');
      return;
    } else if (location.pathname.includes('favorite')) {
      setActive('product');
      return;
    } else if (
      location.pathname.includes('order') ||
      location.pathname.includes('detail')
    ) {
      setActive('second');
      return;
    } else if (location.pathname.includes('coupon')) {
      setActive('fourth');
      return;
    }
    setActive('first');
  }, [location]);
  useEffect(() => {
    if (active === 'first') {
      setTitle('帳戶資訊');
      setOpen(false);
    } else if (active === 'second') {
      setTitle('訂單紀錄');
      setOpen(false);
    } else if (
      active === 'product' ||
      active === 'course' ||
      active === 'activity'
    ) {
      setTitle('最愛收藏');
      setOpen(true);
    } else if (active === 'fourth') {
      setTitle('優惠卷');
      setOpen(false);
    }
  }, [active]);
  useEffect(() => {}, [userData]);

  return (
    <>
      <div className="container-fluid member mb-5 mt-nav">
        <Tab.Container
          id="left-tabs-example"
          activeKey={active}
          onSelect={(e) => {
            setActive(e);
          }}
        >
          <Row className="gap-3 gap-sm-5 justify-content-center">
            <Col sm={2}>
              <h3 className="my-1 my-sm-5 text-primary">{title}</h3>
            </Col>
            <Col sm={7}></Col>
          </Row>
          <Row className="gap-5 justify-content-center">
            <Col sm={2} className="text-center me-3 d-none d-sm-block">
              <div className="member-info mx-auto pb-4">
                <div className="bg-primary text-white py-2 mb-3">
                  <FaUser />
                  <span>用戶資訊</span>
                </div>
                <div>
                  <figure className="circle mx-auto">
                    <img
                      src={
                        photo
                          ? `${IMAGE_URL}/members/${photo}`
                          : require('../images/picture.png')
                      }
                      alt="..."
                      className="object-cover"
                    />
                  </figure>
                </div>
                <p className="text-primary fs-5 mb-1">{name}</p>
                <p className="text-content mb-1">{phone}</p>
                <p className="text-content">{email}</p>
                <hr className="w-75 mx-auto mb-2"></hr>
                <Nav className="flex-column gap-3 h5">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      onClick={() => {
                        history('/member/profile');
                      }}
                    >
                      帳戶資訊
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      onClick={() => {
                        history('/member/order');
                      }}
                    >
                      訂單紀錄
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Item
                      onClick={handleClick}
                      className="select-top-item my-2"
                    >
                      最愛收藏
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Nav.Link
                          eventKey="product"
                          onClick={() => {
                            history('/member/favorite/product');
                          }}
                        >
                          商品
                        </Nav.Link>
                        <Nav.Link
                          eventKey="course"
                          onClick={() => {
                            history('/member/favorite/course');
                          }}
                        >
                          課程
                        </Nav.Link>
                        <Nav.Link
                          eventKey="activity"
                          onClick={() => {
                            history('/member/favorite/activity');
                          }}
                        >
                          活動
                        </Nav.Link>
                      </Collapse>
                    </Nav.Item>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="fourth"
                      onClick={() => {
                        history('/member/coupon');
                      }}
                    >
                      優惠卷
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col xs={12} sm={8}>
              <Tab.Content className="ms-sm-5 row justify-content-center">
                <Tab.Pane eventKey="first">
                  <Profile
                    userData={userData}
                    setUserData={setUserData}
                    setIsLogin={setIsLogin}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {location.pathname.includes('detail') ? (
                    <OrderDetail userData={userData} />
                  ) : (
                    <OrderList userData={userData} />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="product">
                  <FavoriteProduct userData={userData} />
                </Tab.Pane>
                <Tab.Pane eventKey="course">
                  <FavoriteCourse userData={userData} />
                </Tab.Pane>
                <Tab.Pane eventKey="activity">
                  <FavoriteActivity userData={userData} />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Coupon userData={userData} />
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
