import { IMAGE_URL, API_URL } from '../../utils/config';
import { toThousands } from '../../utils/common';
import { useLogin } from '../../utils/useLogin';
import axios from 'axios';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Checkbox from '@mui/material/Checkbox';
import { MdDelete } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

// const item =
//   {
//     id:1,
//     name: 'BIG_NINE_15',
//     image: 'BIG_NINE_15.jpg',
//     price: '$22,000',
//     quantity: 1,
//   },
//

//TODO: 收藏功能實作

function CartItem(props) {
  const {
    id,
    name,
    image,
    price,
    quantity,
    checked,
    type,
    itemTotal,
    removeItem,
    plusOne,
    minusOne,
    checkedChange,
  } = props;
  const { userData } = useLogin();
  const [favorite, setFavorite] = useState({
    userId: userData.userId,
    courseId: '',
    // 收藏的方法 : product/course/activity
    favoriteMethod:
      type === '商品' ? 'product' : type === '課程' ? 'course' : 'activity',
  });
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [like, setLike] = useState(0);

  function handleClick(e) {
    if (favorite.userId > 0) {
      setFavorite({ ...favorite, courseId: e.target.value });
    } else {
      Swal.fire({
        icon: 'warning',
        title: '收藏失敗',
        html: '登入會員才能進行個人收藏。',
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
      });
    }
  }

  useEffect(() => {
    // 讀到 userData 時,做頁面初始判斷 Item 是否在收藏表中
    setFavorite({ ...favorite, userId: userData.userId });
  }, [userData]);

  useEffect(() => {
    // 更新收藏狀態
    let postFavorite = async () => {
      try {
        let response = await axios.post(
          `${API_URL}/member/favorite/update`,
          favorite
        );
        Swal.fire({
          icon: 'success',
          html: response.data.result,
          confirmButtonText: 'OK',
          focusConfirm: false,
          // buttonsStyling: false,
        });
      } catch (e) {
        console.error(e);
      }
      setFavoriteActive(!favoriteActive);
    };
    if (favorite.courseId && favorite.userId > 0) {
      postFavorite();
    } else if (favorite.userId > 0) {
      (async () => {
        if (favorite.userId > 0) {
          try {
            let response = await axios.post(
              `${API_URL}/member/favorite/check`,
              {
                ...favorite,
                courseId: id,
              }
            );
            console.log('like', response.data.data.length);
            setLike(response.data.data.length);
          } catch (error) {
            console.log(error);
          }
        }
      })();
    }
  }, [favorite]);

  useEffect(() => {
    // for 頁面重新渲染愛心
    (async () => {
      if (favorite.courseId) {
        try {
          let response = await axios.post(
            `${API_URL}/member/favorite/check`,
            favorite
          );
          console.log('like', response.data.data.length);
          setLike(response.data.data.length);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [favoriteActive]);

  if ((type === '課程') | (type === '活動')) {
    return (
      <>
        <div className="border-bottom text-center shopping-cart__detail px-2 px-lg-0">
          <div className="row align-items-center">
            <div className="col-lg-1 col-1">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  checkedChange(id);
                }}
              />
            </div>
            <div className="col-lg-2 col-4 figure">
              <img
                src={
                  type === '課程'
                    ? `${IMAGE_URL}/course/${image}`
                    : `${IMAGE_URL}/activity/${image}`
                }
                className="figure-img img-fluid p-2"
                alt="..."
              />
            </div>
            <div className="col-lg-7 col-5 row mx-0 ">
              <div className="col-12 col-lg text-highlight fw-bold">{name}</div>
              <div className="col-12 col-lg mb-3 mb-lg-0">
                $ {toThousands(price)}
              </div>
            </div>
            <div className="col-1 col-lg-1">
              <button className="shopping-cart__btn first-btn">
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
                  value={id}
                  checked={like > 0 ? true : false}
                  onClick={handleClick}
                />
              </button>
            </div>
            <div className="col-1 col-lg-1">
              <button
                className="shopping-cart__btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="border-bottom text-center  shopping-cart__detail px-2 px-lg-0">
          <div className="row align-items-center">
            <div className="col-lg-1 col-1">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                  checkedChange(id);
                }}
              />
            </div>
            <div className="col-lg-2 col-4 figure">
              <img
                src={`${IMAGE_URL}/bikes/${image}`}
                className="figure-img img-fluid p-2"
                alt="..."
              />
            </div>
            <div className="col-lg-7 col-5 row mx-0 gap-2 gap-lg-0">
              <div className="col-12 col-lg text-highlight fw-bold">{name}</div>
              <div className="col-12 col-lg">$ {toThousands(price)}</div>
              <div className="col-12 col-lg">
                <div className="input-group">
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => {
                      minusOne(id);
                    }}
                  >
                    -
                  </button>
                  <div>{quantity}</div>
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => {
                      plusOne(id);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg mb-3 mb-lg-0">
                ${toThousands(itemTotal)}
              </div>
            </div>
            <div className="col-1 col-lg-1">
              <button className="shopping-cart__btn first-btn">
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
                  value={id}
                  checked={like > 0 ? true : false}
                  onClick={handleClick}
                />
              </button>
            </div>
            <div className="col-1 col-lg-1">
              <button
                className="shopping-cart__btn"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartItem;
