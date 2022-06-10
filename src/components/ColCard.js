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
    <div className="card" style={{ width: width + 'rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title m-0">{title}</h5>
          <div className="text-hightlight">
            {like === 1 ? <BsHeartFill /> : <BsHeart />}
          </div>
        </div>
        <p className="card-text">{text}</p>
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
  );
}
