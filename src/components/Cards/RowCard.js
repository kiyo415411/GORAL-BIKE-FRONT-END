import { BsStarFill, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useLogin } from '../../utils/useLogin';
import swal from 'sweetalert';
// 評分計算
function star({ score }) {
  const starGroup = [];
  const starCount = 5;
  for (let i = 0; i < score; i++) {
    starGroup.push(<BsStarFill key={i} />);
  }
  for (let i = score; i < starCount; i++) {
    starGroup.push(<BsStar key={i} />);
  }
  return starGroup;
}

// 排版
function RowCard({
  courseId,
  image,
  price,
  like,
  score,
  time,
  location,
  statu,
  text,
  count,
  category,
  venue,
  title,
  datailLink,
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
    <div
      className={`project-row-card card mb-3 shadow border-0 rounded-0 px-0 animate__animated animate__fadeIn`}
    >
      <div className="overflow-hidden d-flex">
        <div className="row-card-img-box product-img col-4 col-xl-5">
          {/* 圖片 */}
          <Link to={datailLink}>
            <img src={image} className="cover" alt={title} />
          </Link>
        </div>
        <div className="card-body px-4 d-grid gap-1">
          <div className="d-flex justify-content-between align-items-center">
            {/* 評分 */}
            <div className="text-icon-star d-flex gap-1">{star({ score })}</div>
            {/* 收藏 */}
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
          <div className="d-flex justify-content-between align-items-center">
            <Link to={datailLink}>
              <div className="d-flex align-items-center gap-2">
                {/* 名稱 */}
                <h5 className="card-title text-primary m-0 p-0">{title}</h5>
              </div>
            </Link>
            {/* 價格 */}
            <h5 className="text-content m-0 text-nowrap">$ {price}</h5>
          </div>
          <div className="row gap-2 align-items-center">
            <div className="d-flex gap-2 align-items-center col-12 flex-wrap">
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
            {/* 人數 */}
            <p className="fs-7 text-dark m-0 ms-3 text-start p-0 col-5">
              參加名額 : {count}
            </p>
            {/* 時間 */}
            <p className="text-primary fs-7 fw-bold m-0 p-0 text-nowrap text-end col-5 col-md-6">
              {time}
            </p>
          </div>
          {/* 說明 */}
          <p className="row-card-text card-text text-subcontent m-0 mb-2 col-12">
            {text}
          </p>
          {/* 購買按鈕 */}
          <div className="d-flex gap-2 align-items-center justify-content-end">
            <Link to={datailLink}>
              <p className="card-btn text-nowrap m-0 btn fs-6 border-2 px-4 rounded-0 btn-outline-primary rounded-pill">
                更多詳情
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
