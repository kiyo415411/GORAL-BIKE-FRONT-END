// 使用者邊攔
import { FaUser } from 'react-icons/fa'; // User icon
function UserAside() {
  const menu = ['帳戶資訊', '訂單紀錄', '最愛收藏', '優惠券'];
  const user = {
    avator: require('../images/UserPicture.webp'),
    fullname: '羊百克',
    phone: '0912345678',
    email: 'goralbike3000@gmail.com',
  };
  return (
    <div className="sticky-top">
      <div className="Space" style={{ height: '3rem' }}></div>
      <div className="user-aside shadow text-center text-content pb-2 bg-white">
        <header className="text-white bg-primary d-flex justify-content-center align-items-center py-1">
          <FaUser size={14} />
          <h6 className="m-0 ms-2">用戶資訊</h6>
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
            <li className="text-primary fw-bold">{user.fullname}</li>
            <div className="user-aside-data d-grid gap-3 text-content fw-normal">
              <li>{user.phone}</li>
              <li>{user.email}</li>
            </div>
          </ul>
        </section>
        <hr className="w-75 mx-auto"></hr>
        <section className="user-menu">
          <ul className="list-unstyled d-grid gap-3 fw-bold">
            {menu.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default UserAside;
