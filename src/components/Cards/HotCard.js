import axios from 'axios';
import { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useLogin } from '../../utils/useLogin';
import swal from 'sweetalert';
import { API_URL } from '../../utils/config';

export default function HotCard({
  detailLink,
  image,
  title,
  price,
  theme,
  favoriteMethod,
  courseId,
  favoriteIs,
  favoriteActive,
  setFavoriteActive,
}) {
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: favoriteMethod,
  });

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
            checked={favoriteIs !== null && favoriteIs !== undefined}
            onClick={handleClick}
          />
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
