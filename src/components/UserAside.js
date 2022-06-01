import { RiArrowDownSFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import UserPicture from '../images/UserPicture.webp';
function UserAside() {
  return (
    <>
      <div className="user-aside shadow text-center text-dark">
        <header className="text-white bg-primary">
          <strong>
            <FaUser />
            用戶資訊
          </strong>
        </header>
        <section className="user-data">
          <img
            className="rounded-circle"
            src={UserPicture}
            alt="DemoUserPicture"
          />
          <strong>name</strong>
          <p>phone</p>
          <p>e-mail</p>
        </section>
        <section className="user-menu">
          <ul className="list-unstyled">
            <li>
              帳戶資訊
              <RiArrowDownSFill />
            </li>
            <li>
              訂單紀錄
              <RiArrowDownSFill />
            </li>
            <li>
              最愛收藏
              <RiArrowDownSFill />
            </li>
            <li>
              優惠券
              <RiArrowDownSFill />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default UserAside;
