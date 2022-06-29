import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { toThousands } from '../../utils/common';
import { API_URL, IMAGE_URL } from '../../utils/config';

// function toThousands(num) {
//   num = (num || 0).toString();
//   let result = '';
//   while (num.length > 3) {
//     result = ',' + num.slice(-3) + result;
//     num = num.slice(0, num.length - 3);
//   }
//   if (num) {
//     result = num + result;
//   }
//   return result;
// }

// const item =
//   {
//     id:1,
//     name: 'BIG_NINE_15',
//     image: 'BIG_NINE_15.jpg',
//     price: '$22,000',
//     quantity: 1,
//   },
//

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
                <BsHeart />
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
                <BsHeart />
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
