import { RiArrowDownSFill } from 'react-icons/ri'; // 摺疊 icon
import { FaUser } from 'react-icons/fa'; // User icon
import Avator from '../images/UserPicture.webp'; // avator

function UserAside() {
  const menu = ['帳戶資訊', '訂單紀錄', '最愛收藏', '優惠券'];
  const user = {
    avator: Avator,
    fullname: '羊百克',
    phone: '0912345678',
    email: 'goralbike3000@gmail.com',
  };
  return (
    <div className="user-aside shadow text-center text-content pb-2">
      <header className="text-white bg-primary d-flex justify-content-center align-items-center py-1">
        <FaUser size={14} />
        <h5 className="m-0 ms-2 fw-light">用戶資訊</h5>
      </header>
      <section className="user-data mt-3">
        <ul className="list-unstyled d-grid gap-3 mt-3">
          <li>
            <img
              className="rounded-circle shadow-sm"
              src={user.avator}
              alt="頭像"
            />
          </li>
          <li className="fw-bold text-primary h3">{user.fullname}</li>
          <div className="user-aside-data d-grid gap-3 text-dark fw-light h4">
            <li>{user.phone}</li>
            <li>{user.email}</li>
          </div>
        </ul>
      </section>
      <hr className="w-75 mx-auto"></hr>
      <section className="user-menu">
        <ul className="list-unstyled d-grid gap-3 fw-bold h3">
          {menu.map((value, index) => {
            return (
              <li key={index}>
                {value}
                <RiArrowDownSFill size={24} className="mb-1" />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default UserAside;