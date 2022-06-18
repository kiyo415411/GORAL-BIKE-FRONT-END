import { BsHeart, BsHeartFill } from 'react-icons/bs';

// 排版
export default function HotCard({ width, image, like, title, price }) {
  return (
    <div
      className="card shadow rounded-0 border-0 mb-5 mx-2"
      style={{ width: width + 'rem' }}
    >
      <img src={image} className="card-img-top rounded-0" alt={title} />
      <div className="card-body mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title m-0">{title}</h6>
          <div className="text-hightlight">
            {like === 1 ? <BsHeartFill /> : <BsHeart />}
          </div>
        </div>
        {/* 價錢 */}
        <p className="m-0 fs-6 text-line mb-3">{price}</p>
        {/* 購買按鈕 */}
        <div className="d-flex align-items-center justify-content-between">
          <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill text-nowrap">
            直接購買
          </button>
          <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill text-nowrap">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  );
}
