import { useState } from 'react';
import { Link } from 'react-router-dom';
import Like from '../Aside/Like';

export default function HotCard({ detailLink, image, title, price, theme }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card shadow rounded-0 border-0 mb-5 mx-2 col-12">
      <img
        src={image}
        className="card-img-top rounded-0 cover"
        alt={title}
        style={{ height: '13rem' }}
      />
      <div className="card-body mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title m-0">{title}</h6>
          <Like liked={liked} setLiked={setLiked} />
        </div>
        {/* 價錢 */}
        <p className="m-0 fs-6 text-line mb-3">$ {price}</p>
        {/* --------------------------------按鈕 */}
        {theme === '課程' || '活動' ? (
          <div className="d-flex align-items-center justify-content-end">
            <a href={detailLink}>
              <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill text-nowrap">
                {theme}詳情
              </button>
            </a>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill text-nowrap">
              直接購買
            </button>
            <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-outline-primary rounded-pill text-nowrap">
              加入購物車
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
