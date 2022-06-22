import { BsStarFill, BsStar } from 'react-icons/bs';
import { useState } from 'react';
import Like from '../Aside/Like';
import { Link } from 'react-router-dom';

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
  height,
  courseId,
  image,
  title,
  price,
  score,
  time,
  location,
  statu,
  text,
  count,
  category,
  venue,
}) {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className="project-row-card card mb-3 shadow border-0 rounded-0 px-0"
      style={{ height: height + 'rem' }}
    >
      <div className="overflow-hidden d-flex">
        <div className="product-img">
          {/* 圖片 */}
          <Link to={`/course/${courseId}`}>
            <img src={image} className="object-fit" alt={title} />
          </Link>
        </div>
        <div className="card-body px-4 d-grid gap-1">
          <div className="d-flex justify-content-between align-items-center">
            {/* 評分 */}
            <div className="text-icon-star d-flex gap-1">{star({ score })}</div>
            {/* 收藏 */}
            <div className="text-highlight">
              <Like liked={liked} setLiked={setLiked} />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Link to={`/course/${courseId}`}>
              <div className="d-flex align-items-center gap-2">
                {/* 時間 */}
                <p className="text-primary fs-3 fw-bold m-0">{time}</p>
                {/* 名稱 */}
                <h3 className="card-title text-primary m-0 p-0">{title}</h3>
              </div>
            </Link>
            {/* 價格 */}
            <h4 className="text-content m-0">$ {price}</h4>
          </div>
          <div className="d-flex gap-2 align-items-center">
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
                {location}
              </p>
            ) : venue === '中部' ? (
              <p className="bg-badge-yellow badge rounded-pill px-3 fw-light m-0">
                {location}
              </p>
            ) : venue === '南部' ? (
              <p className="bg-badge-lightblue badge rounded-pill px-3 fw-light m-0">
                {location}
              </p>
            ) : venue === '東部' ? (
              <p className="bg-secondary badge rounded-pill px-3 fw-light m-0">
                {location}
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
            {/* 人數 */}
            <p className="badge text-dark m-0 text-start p-0">
              剩餘報名人數 : {count}
            </p>
          </div>
          {/* 說明 */}
          <p className="row-card-text card-text text-subcontent">{text}</p>
          {/* 購買按鈕 */}
          <div className="d-flex gap-2 align-items-center">
            <Link to={`/course/${courseId}`}>
              <p className="text-nowrap m-0 btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill">
                課程詳情
              </p>
            </Link>
            {/* TODO 課程報名連結頁面 */}
            <Link to={''}>
              <p className="text-nowrap m-0 btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill">
                課程報名
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
