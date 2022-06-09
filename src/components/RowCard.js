// 商品卡片(橫向)
import { BsStarFill, BsStar, BsHeart, BsHeartFill } from 'react-icons/bs';
import Badge from '../components/Badge';
import Button from '../components/Button';

// 評分計算
function star({ score }) {
  const starGroup = [];
  const starCount = 5;
  for (let i = 0; i < score; i++) {
    const index = 'sf' + i;
    starGroup.push(<BsStarFill key={index} />);
  }
  for (let i = 0; i < starCount - score; i++) {
    const index = 's' + i;
    starGroup.push(<BsStar key={index} />);
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
            {/* 名稱 */}
            <h3 className="card-title text-primary">{title}</h3>
            {/* 價格 */}
            <h4 className="text-content">{price}</h4>
          </div>
          <div className="d-flex gap-2 align-items-center">
            {/* 時間 */}
            <h5 className="text-primary">{time}</h5>
            {/* 地點 */}
            <Badge text={location} className="bg-secondary" />
            <Badge text={statu} className="bg-secondary" />
          </div>
          {/* 說明 */}
          <p className="row-card-text card-text text-subcontent">{text}</p>
          {/* 購買按鈕 */}
          <div className="d-flex gap-2 align-items-center">
            <Button text="直接購買" className="btn-primary" />
            <Button text="加入購物車" className="btn-outline-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
