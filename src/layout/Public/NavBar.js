import Logo from '../../images/Logo.png';
import { BsPersonCircle, BsCart3, BsHeart } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
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
            <NavLink to="news" className={'nav-link'} activeClassName="active">
              最新消息
            </NavLink>
            <NavLink
              to="product"
              className={'nav-link'}
              activeClassName="active"
            >
              全部商品
            </NavLink>
            <NavLink to="map" className={'nav-link'} activeClassName="active">
              地圖
            </NavLink>
            <NavLink
              to="course"
              className={'nav-link'}
              activeClassName="active"
            >
              課程
            </NavLink>
            <NavLink
              to="activity"
              className={'nav-link'}
              activeClassName="active"
            >
              活動
            </NavLink>
          </ul>
        </div>

        {/* ----------------ICONS---------------- */}
        <div className="col-4 col-md-2">
          <ul className="list-unstyled row my-auto justify-content-end gap-2">
            <li className="col-2 text-center">
              <NavLink
                to="/"
                className={'nav-link text-muted'}
                activeClassName="active"
              >
                <BsPersonCircle />
              </NavLink>
            </li>
            <li className="col-2 text-center">
              <NavLink
                to="/"
                className={'nav-link text-muted'}
                activeClassName="active"
              >
                <BsCart3 />
              </NavLink>
            </li>
            <li className="col-2 text-center">
              <NavLink
                to="/"
                className={'nav-link text-muted'}
                activeClassName="active"
              >
                <BsHeart />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
