import { RiArrowDownSFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import UserPicture from '../images/UserPicture.webp';
function UserAside() {
  const menu = ['帳戶資訊', '訂單紀錄', '最愛收藏', '優惠券'];
  const user = {
    fullname: '羊百克',
    phone: '0912345678',
    email: 'goralbike3000@gmail.com',
  };
  return (
    <>
      <div className="user-aside shadow text-center text-content p-0">
        <header className="text-white bg-primary d-flex justify-content-center align-items-center py-1">
          <FaUser size={14} />
          <p className="user-aside-title m-0 ms-2 fw-light">用戶資訊</p>
        </header>
        <section className="user-data mt-3">
          <img
            className="rounded-circle shadow-sm"
            src={UserPicture}
            alt="DemoUserPicture"
          />
          <ul className="list-unstyled d-grid gap-3 mt-3">
            <li className="fw-bold text-primary">{user.fullname}</li>
            <g className="user-aside-data d-grid gap-3 text-dark fw-light">
              <li>{user.phone}</li>
              <li>{user.email}</li>
            </g>
          </ul>
        </section>
        <hr className="w-75 mx-auto"></hr>
        <section className="user-menu">
          <ul className="list-unstyled d-grid gap-3 fw-bold">
            {menu.map((value, index) => {
              return (
                <li>
                  {value} <RiArrowDownSFill />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default UserAside;
