import { BsStarFill, BsStar, BsHeart, BsHeartFill } from 'react-icons/bs';

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
  image,
  score,
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
      className="project-row-card card mb-3 shadow border-0 rounded-0 px-0"
      style={{ height: height }}
    >
      <div className="overflow-hidden d-flex">
        <div className="product-img">
          {/* 圖片 */}
          <img src={image} className="object-fit" alt={title} />
        </div>
        <div className="card-body px-4 d-grid gap-1">
          <div className="d-flex justify-content-between align-items-center">
            {/* 評分 */}
            <div className="text-icon-star d-flex gap-1">{star({ score })}</div>
            {/* 收藏 */}
            <div className="text-hightlight">
              {like === 1 ? <BsHeartFill /> : <BsHeart />}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              {/* 時間 */}
              <p className="text-primary fs-3 fw-bold m-0">{time}</p>
              {/* 名稱 */}
              <h3 className="card-title text-primary m-0">{title}</h3>
            </div>
            {/* 價格 */}
            <h4 className="text-content">{price}</h4>
          </div>
          <div className="d-flex gap-2 align-items-center">
            {/* 地點 */}
            <p className="bg-secondary badge rounded-pill px-3 fw-light">
              {location}
            </p>
            <p className="bg-secondary badge rounded-pill px-3 fw-light">
              {statu}
            </p>
            <p className="badge text-content">報名人數 : 30</p>
          </div>
          {/* 說明 */}
          <p className="row-card-text card-text text-subcontent">{text}</p>
          {/* 購買按鈕 */}
          <div className="d-flex gap-2 align-items-center">
            <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill">
              直接購買
            </button>
            <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
