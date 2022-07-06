import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DecimalStar from './DecimalStar.js';
import { useProductCart } from '../../utils/useProductCart.js';
import { API_URL, IMAGE_URL } from '../../utils/config.js';
import { useLogin } from '../../utils/useLogin'; // user's data
import swal from 'sweetalert'; // Sweet Alert
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function separator(num) {
  let str = num.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}
function BikeCard(props) {
  const productCart = useProductCart();
  const { addItem } = productCart;
  const [for5] = useState([1, 2, 3, 4, 5]);
  const [shoppingClick, setShoppingClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShoppingClick(false);
    }, [1000]);
  });

  // ---------------------------- favorite's data
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    favoriteMethod: 'product',
  });

  // ---------------------------- favorite's function
  function handleClick(e) {
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
  }, [favorite]);

  return (
    <>
      <div
        className="card shadow p-2 mb-5 bg-body rounded"
        style={{ Width: '1049px', minHeight: '256px' }}
      >
        <div className="row g-0 justify-content-center my-auto align-items-center">
          <div
            className="col-4 h-75 my-auto overflow-hidden"
            style={{ width: 328, height: 220 }}
          >
            <Link to={`/product/detail/${props.id}`}>
              <img
                src={`${IMAGE_URL}/bikes/${props.bike}`}
                className="img-fluid rounded-start my-auto img-fluid"
                alt="..."
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <div className=" ms-3 d-flex gap-2">
              <div className="text-warning d-flex align-items-center">
                {for5.map((x, i) => {
                  return <DecimalStar x={x} rating={props.rating} key={i} />;
                })}
              </div>
              <p className="m-0">{props.rating}</p>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-1 mb-3">
                  <Link to={`/product/detail/${props.id}`}>
                    <h5 className="card-title m-0">{props.name}</h5>
                  </Link>
                  {/* <Like liked={liked} setLiked={setLiked} /> */}
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
                    value={props.id}
                    checked={props.like !== null && props.like !== undefined}
                    onClick={handleClick}
                  />
                </div>
                <h5 className="text-content">${separator(props.price)}</h5>
              </div>
              <p className="card-text text-subcontent">
                <small>{props.text}</small>
              </p>
              <div className="flex">
                <button className="btn btn-primary rounded-pill px-4 me-2">
                  直接購買
                </button>

                <button
                  className={`btn border-primary rounded-pill px-4 ${
                    shoppingClick === true
                      ? 'bg-success text-white border-white'
                      : ''
                  }`}
                  onClick={() => {
                    addItem({
                      id: props.id,
                      name: props.name,
                      image: props.bike,
                      price: props.price,
                      quantity: 1,
                    });
                    setShoppingClick(shoppingClick === true ? false : true);
                  }}
                >
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

export default BikeCard;
