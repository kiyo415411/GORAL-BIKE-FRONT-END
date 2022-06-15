import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

function CartItem(props) {
  const { name, image, price, count, totalPrice } = props;
  return (
    <>
      <div className="border-bottom text-center  shopping-cart__detail px-2 px-lg-0">
        <div className="row align-items-center">
          <div className="col-lg-1 col-1">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="col-lg-2 col-4 figure">
            <img
              src={require('../../images/products/BIG_NINE_15.jpg')}
              className="figure-img img-fluid p-2"
              alt="..."
            />
          </div>
          <div className="col-lg-7 col-5 row mx-0 ">
            <div className="col-12 col-lg-3 text-highlight fw-bold">{name}</div>
            <div className="col-12 col-lg-3">{price}</div>
            <div className="col-12 col-lg-3">{count}</div>
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">{totalPrice}</div>
          </div>
          <div className="col-1 col-lg-1">
            <button className="shopping-cart__btn first-btn">
              <BsHeart />
            </button>
          </div>
          <div className="col-1 col-lg-1">
            <button className="shopping-cart__btn">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
