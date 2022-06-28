import Logo from '../../images/Logo.png';
import { BsPersonFill, BsCart3, BsHeart } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import LoginModal from '../../components/auth/LoginModal';
import { useLogin } from '../../utils/useLogin';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Navbar() {
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
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid row justify-content-between">
        {/* --------------- LOGO----------------- */}
        <Link to="/" className="navbar-brand col-5 col-md-2 p-0 text-center">
          <img id="Logo" src={Logo} alt="Logo" />
        </Link>
        {/* <a className="navbar-brand col-5 col-md-2 p-0 text-center" href="#/">
          <img id="Logo" src={Logo} alt="Logo" />
        </a> */}
        {/* ----------------LIST----------------- */}
        <div className="collapse navbar-collapse col-md-8">
          <ul className="navbar-nav mx-auto gap-4">
            <Link to="news" className="nav-link text-white ">
              最新消息
            </Link>
            <Link to="product" className="nav-link text-muted">
              全部商品
            </Link>
            <Link to="custom" className="nav-link text-muted">
              客製化
            </Link>
            <Link to="Map" className="nav-link text-muted">
              地圖
            </Link>
            <Link to="course" className="nav-link text-muted">
              課程
            </Link>
            <Link to="activity" className="nav-link text-white">
              活動
            </Link>
          </ul>
        </div>

        {/* ----------------ICONS---------------- */}
        <div className="col-4 col-md-2">
          <ul className="list-unstyled row my-auto justify-content-end gap-2">
            {isLogin ? (
              <>
                <li className="col-2 text-center">
                  <a className="text-muted" href="#/">
                    <BsPersonFill />
                  </a>
                </li>
                <li className="col-2 text-center">
                  <a
                    className="text-muted"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      history('/shopping-cart');
                    }}
                  >
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
                  <a
                    className="text-muted"
                    href="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      history('/shopping-cart');
                    }}
                  >
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
      </div>
    </nav>
  );
}

export default Navbar;
