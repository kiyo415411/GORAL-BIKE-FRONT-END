import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';
import swal from 'sweetalert';

// 排版
export default function ColCard({
  courseId,
  image,
  title,
  price,
  time,
  location,
  statu,
  text,
  count,
  category,
  venue,
  datailLink,
  like,
  favoriteActive,
  setFavoriteActive,
  favoriteMethod,
}) {
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: favoriteMethod,
  });

  // console.log(userId);
  function handleClick(e) {
    console.log(e.target.value);
    if (favorite.userId !== '') {
      setFavorite({ ...favorite, courseId: e.target.value });
    } else {
      swal('收藏失敗', '登入會員才能進行個人收藏。', 'warning');
    }
  }

  useEffect(() => {
    let postFavorite = async () => {
      try {
        await axios.post(`${API_URL}/member/favorite/update`, favorite);
      } catch (e) {
        console.error(e);
      }
      setFavoriteActive(!favoriteActive);
    };
    postFavorite();

    // console.log('postFavorite');
  }, [favorite]);

  return (
    <div className="col-card card shadow rounded-0 border-0 mb-3 animate__animated animate__fadeIn col-12">
      <div className="col-card-img-box overflow-hidden ">
        <Link to={datailLink}>
          <img
            src={image}
            className="card-img-top rounded-0 object-fit"
            alt={title}
          />
        </Link>
      </div>
      <div className="card-body d-grid px-4">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <Link to={datailLink}>
            <h5 className="card-title m-0 me-2">{title}</h5>
          </Link>

          <Checkbox
            icon={<BsHeart />}
            checkedIcon={<BsHeartFill />}
            size="large"
            sx={{
              color: 'var(--bs-highlight)',
              '&.Mui-checked': {
                color: 'var(--bs-highlight)',
              },
            }}
            value={courseId}
            checked={like !== null && like !== undefined}
            onClick={handleClick}
          />
        </div>

        <div className="align-items-center d-none d-lg-flex gap-2 mb-2">
          {/* ------------------------ 難度 */}
          {category === '入門' ? (
            <p className="bg-badge-lightblue badge rounded-pill px-3 fw-light m-0">
              {category}
            </p>
          ) : category === '進階' ? (
            <p className="bg-badge-yellow badge rounded-pill px-3 fw-light m-0">
              {category}
            </p>
          ) : (
            ''
          )}
          {/* ------------------------ 地點 */}
          {venue === '北部' ? (
            <p className="bg-badge-red badge rounded-pill px-3 fw-light m-0">
              {location ? location : venue}
            </p>
          ) : venue === '中部' ? (
            <p className="bg-badge-yellow badge rounded-pill px-3 fw-light m-0">
              {location ? location : venue}
            </p>
          ) : venue === '南部' ? (
            <p className="bg-badge-lightblue badge rounded-pill px-3 fw-light m-0">
              {location ? location : venue}
            </p>
          ) : venue === '東部' ? (
            <p className="bg-secondary badge rounded-pill px-3 fw-light m-0">
              {location ? location : venue}
            </p>
          ) : (
            ''
          )}

          {/* ------------------------ 狀態 */}
          {statu === '報名未開放' ? (
            <p className="bg-line badge rounded-pill px-3 fw-light m-0">
              {statu}
            </p>
          ) : statu === '報名開放中' ? (
            <p className="bg-badge-red badge rounded-pill px-3 fw-light m-0">
              {statu}
            </p>
          ) : statu === '報名已截止' ? (
            <p className="bg-secondary badge rounded-pill px-3 fw-light m-0">
              {statu}
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center text-primary fs-6">
          {/* 時間 */}
          <p className="m-0">{time}</p>
          {/* 價格 */}
          <p className="m-0">$ {price}</p>
        </div>
        <div className="d-none d-lg-block">
          {/* 人數 */}
          <p className="badge text-dark m-0 text-start p-0">
            參加名額 : {count}
          </p>
          <p className="m-0 text-primary">活動簡介 ：</p>
          <p className="col-card-text card-text text-content col-12">{text}</p>
        </div>
        {/* --------------------------------------------------更多詳情 btn */}
        <div className="d-flex align-items-center justify-content-end mt-2">
          <Link to={datailLink}>
            <p className="card-btn text-nowrap btn btn-outline-primary border-2 rounded-pill m-0 fs-6">
              更多詳情
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
