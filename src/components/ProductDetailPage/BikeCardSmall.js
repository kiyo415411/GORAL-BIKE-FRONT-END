import axios from 'axios';
import { useState, useEffect } from 'react';
// import Like from '../Aside/Like.js';
import { Link } from 'react-router-dom';
import { IMAGE_URL, API_URL } from '../../utils/config';
import swal from 'sweetalert';
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useLogin } from '../../utils/useLogin';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}

function BikeCardSmall(props) {
  const img = props.img;
  // const [liked, setLiked] = useState(false);

  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: 'product',
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
      props.setFavoriteActive(!props.favoriteActive);
    };
    postFavorite();

    // console.log('postFavorite');
  }, [favorite]);
  return (
    <>
      <div
        className="card shadow p-2 mb-5 bg-body rounded container mx-0 px-0"
        style={{ width: '400px', height: '450px' }}
      >
        <div className="row">
          <div className="mx-auto d-flex justify-content-center">
            <img
              src={`${IMAGE_URL}/bikes/${img.replace(/ /g, '%20')}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="m-auto">
            <div
              className="card-body"
              style={{ position: 'absolute', bottom: '10px' }}
            >
              <div className="">
                <div className="mb-3 d-flex gap-2">
                  <Link to="/Product/Detail" className="">
                    <h5 className="card-title m-0">{props.name}</h5>
                  </Link>
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
                    value={props.courseId}
                    checked={
                      props.favoriteIs !== null &&
                      props.favoriteIs !== undefined
                    }
                    onClick={handleClick}
                  />
                </div>
                <h5 className="text-content">${separator(props.price)}</h5>
              </div>
              <p className="card-text text-subcontent"></p>
              <div className="">
                <button className="btn btn-primary rounded-pill px-4 me-2">
                  直接購買
                </button>
                <button className="btn border-primary rounded-pill px-4">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeCardSmall;
