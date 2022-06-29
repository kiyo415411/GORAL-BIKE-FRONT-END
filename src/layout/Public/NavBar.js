import Logo from '../../images/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BsPersonFill, BsCart3, BsHeart } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import LoginModal from '../../components/auth/LoginModal';
import { useLogin } from '../../utils/useLogin';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function GoralBikeNavbar() {
  // 抓取螢幕寬度
  let getScreenWidth = window.screen.width;
  // 設定螢幕寬度
  const [screenWidth, setScreenWidth] = useState(768);

  useEffect(() => {
    let getScreenWidth = window.screen.width;
    setScreenWidth(getScreenWidth);
  }, [getScreenWidth]);
  const { isLogin, setIsLogin, setUserData } = useLogin();
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '確定要登出嗎？',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: '登出',
      cancelButtonText: '返回',
      focusCancel: false,
      focusConfirm: false,
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const logoutRes = await axios.get(`${API_URL}/auth/logout`, {
          withCredentials: true,
        });
        if (logoutRes.status === 200 && logoutRes.data.code === 0) {
          setUserData({
            userId: '',
            email: '',
          });
          setIsLogin(false);
          history('/');
        }
      }
    });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        className={`${screenWidth < 500 ? 'fixed-top' : ''}`}
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              className="navbar-brand col-5 col-md-2 p-0 text-center"
            >
              <img id="Logo" src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="navbar-nav mx-auto gap-4">
              <NavLink to="news" className={'nav-link'}>
                最新消息
              </NavLink>
              <NavLink to="product" className={'nav-link'}>
                全部商品
              </NavLink>
              <NavLink to="map" className={'nav-link'}>
                地圖
              </NavLink>
              <NavLink to="course" className={'nav-link'}>
                課程
              </NavLink>
              <NavLink to="activity" className={'nav-link'}>
                活動
              </NavLink>
            </ul>
          </Navbar.Collapse>
          <div
            className={`${
              screenWidth < 500 ? 'fixed-bottom' : ''
            } bg-primary col-md-2`}
          >
            <ul className="list-unstyled row my-auto p-3 p-0 my-md-0  justify-content-between justify-content-md-end gap-2">
              {isLogin ? (
                <>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/">
                      <BsPersonFill />
                    </a>
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/">
                      <BsCart3 />
                    </a>
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/">
                      <BsHeart />
                    </a>
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/" onClick={handleLogout}>
                      <BiLogOut className="transform-flipX" />
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="col-2 text-center">
                    <LoginModal />
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/">
                      <BsCart3 />
                    </a>
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/">
                      <BsHeart />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default GoralBikeNavbar;
