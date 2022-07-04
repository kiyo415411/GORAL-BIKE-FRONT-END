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
import { Container, Navbar } from 'react-bootstrap';
import useWindowSize from '../../components/hooks/useWindowSize';

function GoralBikeNavbar() {
  // 抓取螢幕寬度
  const screenWidth = useWindowSize();
  let rwd = screenWidth <= 768;

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

  const goCart = (e) => {
    e.preventDefault();
    history('/shopping-cart');
  };
  const goMember = (e) => {
    e.preventDefault();
    history('/member');
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        className={`${rwd ? 'fixed-top' : ''}`}
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/homepage"
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
              <NavLink to="/CustomePages/customize" className={'nav-link'}>
                客製化
              </NavLink>
            </ul>
          </Navbar.Collapse>
          <div className={`${rwd ? 'fixed-bottom' : ''} bg-primary col-md-2`}>
            <ul className="list-unstyled row my-auto p-3 p-0 my-md-0  justify-content-between justify-content-md-end gap-2">
              {isLogin ? (
                <>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/" onClick={goMember}>
                      <BsPersonFill />
                    </a>
                  </li>
                  <li className="col-2 text-center">
                    <a className="text-muted" href="#/" onClick={goCart}>
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
                    <a className="text-muted" href="#/" onClick={goCart}>
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
