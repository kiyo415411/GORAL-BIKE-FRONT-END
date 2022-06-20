import { useState } from 'react';
import Like from '../Aside/Like';

// 排版
export default function ColCard({
  width,
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
}) {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className="card shadow rounded-0 border-0 mb-5 mx-2"
      style={{ width: width + 'rem' }}
    >
      <div className="col-card-img-box overflow-hidden">
        <img
          src={image}
          className="card-img-top rounded-0 object-fit"
          alt={title}
        />
      </div>
      <div className="card-body d-grid gap-2 px-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="card-title m-0">{title}</h3>
          <div className="text-hightlight">
            <Like liked={liked} setLiked={setLiked} />
          </div>
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
        </div>
        <div className="d-flex justify-content-between align-items-center text-primary fs-6">
          {/* 時間 */}
          <p className="m-0">{time}</p>
          {/* 價格 */}
          <p className="m-0">$ {price}</p>
        </div>
        {/* 人數 */}
        <p className="badge text-dark m-0 text-start p-0">
          剩餘報名人數 : {count}
        </p>
        <p className="m-0 text-primary">活動簡介 ：</p>
        <p className="col-card-text card-text text-content">{text}</p>
        {/* 購買按鈕 */}
        <div className="d-flex gap-2 align-items-center justify-content-between">
          <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill">
            直接購買
          </button>
          <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
