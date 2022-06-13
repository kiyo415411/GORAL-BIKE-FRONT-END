import Logo from '../../images/Logo.png';
import { BsPersonCircle, BsCart3, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid row justify-content-between">
        {/* --------------- LOGO----------------- */}
        <a className="navbar-brand col-5 col-md-2 p-0 text-center" href="#/">
          <img id="Logo" src={Logo} alt="Logo" />
        </a>
        {/* ----------------LIST----------------- */}
        <div className="collapse navbar-collapse col-md-8">
          <ul className="navbar-nav mx-auto gap-4">
            <Link to="news" className="nav-link text-white">
              最新消息
            </Link>
            <Link to="product" className="nav-link text-white">
              全部商品
            </Link>
            <Link to="custom" className="nav-link text-white">
              客製化
            </Link>
            <Link to="map" className="nav-link text-white">
              地圖
            </Link>
            <Link to="courselist" className="nav-link text-white">
              課程
            </Link>
            <Link to="activitylist" className="nav-link text-white">
              活動
            </Link>
          </ul>
        </div>

        {/* ----------------ICONS---------------- */}
        <div className="col-4 col-md-2">
          <ul className="list-unstyled row my-auto justify-content-end gap-2">
            <li className="col-2 text-center">
              <a className="text-muted" href="#/">
                <BsPersonCircle />
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
