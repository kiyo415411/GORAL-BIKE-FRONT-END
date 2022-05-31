import Logo from '../images/Logo.png';
import { BsPersonCircle, BsCart3, BsHeart } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid row justify-content-around">
        {/* --------------- LOGO----------------- */}
        <a className="navbar-brand col-2 p-0 text-center" href="#/">
          <img id="Logo" src={Logo} alt="Logo" />
        </a>
        {/* ----------------LIST----------------- */}
        <div className="collapse navbar-collapse col-8" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#/">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                全部商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                客製化
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                場地資訊
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                活動
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                課程
              </a>
            </li>
          </ul>
        </div>
        {/* ----------------ICONS---------------- */}
        <div className="col-2 text-white">
          <ul className="navbar-nav d-flex justify-content-center align-items-center gap-2">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#/">
                <BsPersonCircle />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                <BsCart3 />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                <BsHeart size={14.5} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
