import { BsHeart, BsHeartFill } from 'react-icons/bs';

// 排版
export default function ColCard({
  width,
  image,
  like,
  title,
  price,
  time,
  location,
  statu,
  text,
}) {
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
            {like === 1 ? <BsHeartFill /> : <BsHeart />}
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          {/* 地點 */}
          <p className="bg-secondary badge rounded-pill px-3 fw-light m-0">
            {location}
          </p>
          <p className="bg-secondary badge rounded-pill px-3 fw-light m-0">
            {statu}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center text-primary fs-6">
          {/* 時間 */}
          <p className="m-0">{time}</p>
          {/* 價格 */}
          <p className="m-0">{price}</p>
        </div>
        {/* 人數 */}
        <p className="badge text-dark m-0 text-start p-0">報名人數 : 30</p>
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
