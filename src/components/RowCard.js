// 商品卡片(橫向)
import Image from '../images/CourseImg1.jpg';
import { BsStarFill, BsStar, BsHeart, BsHeartFill } from 'react-icons/bs';
import BadgeTag from './BadgeTag';

// 卡片資訊
const card = {
  image: Image,
  score: 3,
  like: 1,
  title: '台中市-越野小學堂',
  price: '$22,000.00',
  time: '2022-07-16',
  location: '東部',
  statu: '報名開放中',
  text: '鋁合金單避震登山車，採用較為直挺的騎乘幾何設定，Shimano Deore 1x10零組件搭配，Suntour避震前叉。 ',
};

// 評分計算
const star = () => {
  const starGroup = [];
  const starCount = 5;
  for (let i = 0; i < card.score; i++) {
    const index = 'sf' + i;
    starGroup.push(<BsStarFill key={index} />);
  }
  for (let i = 0; i < starCount - card.score; i++) {
    const index = 's' + i;
    starGroup.push(<BsStar key={index} />);
  }
  return starGroup;
};

// 排版
function RowCard({ height }) {
  return (
    <div
      className="project-row-card card mb-3 shadow border-0 rounded-0 px-0"
      style={{ height: height }}
    >
      <div className="overflow-hidden d-flex">
        <div className="product-img">
          {/* 圖片 */}
          <img src={card.image} className="object-fit" alt={card.title} />
        </div>
        <div className="card-body px-4 d-grid gap-1">
          <div className="d-flex justify-content-between align-items-center">
            {/* 評分 */}
            <div className="text-icon-star d-flex gap-1">{star()}</div>
            {/* 收藏 */}
            <div className="text-hightlight">
              {card.like === 1 ? <BsHeartFill /> : <BsHeart />}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* 名稱 */}
            <h2 className="card-title text-primary">{card.title}</h2>
            {/* 價格 */}
            <h4 className="text-content">{card.price}</h4>
          </div>
          <div className="d-flex gap-2 align-items-center">
            {/* 時間 */}
            <h4 className="text-primary">{card.time}</h4>
            {/* 地點 */}
            <BadgeTag text={card.location} />
            <BadgeTag text={card.statu} />
          </div>
          {/* 說明 */}
          <p className="card-text h5 text-line fw-lighter">{card.text}</p>
          {/* 購買按鈕 */}
          <div className="d-flex gap-2 align-items-center">
            <a
              href="#/"
              className="btn btn-primary fs-4 rounded-pill px-4 py-1 fw-lighter"
            >
              直接購買
            </a>
            <a
              href="#/"
              className="btn btn-outline-primary  fs-4 rounded-pill px-3 py-1"
            >
              加入購物車
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowCard;
