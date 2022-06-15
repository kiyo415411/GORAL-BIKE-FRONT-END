import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

function CartItem(props) {
  const { name, image, price, count, totalPrice, type } = props;

  if ((type === '課程') | (type === '活動')) {
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
              <div className="col-12 col-lg text-highlight fw-bold">{name}</div>
              <div className="col-12 col-lg mb-3 mb-lg-0">{price}</div>
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
  } else {
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
            <div className="col-lg-7 col-5 row mx-0 gap-1 gap-lg-0">
              <div className="col-12 col-lg text-highlight fw-bold">{name}</div>
              <div className="col-12 col-lg">{price}</div>
              <div className="col-12 col-lg">
                <div class="input-group">
                  <button class="btn btn-outline-primary" type="button">
                    +
                  </button>
                  <input type="text" class="form-control" value={20} />
                  <button class="btn btn-outline-primary" type="button">
                    -
                  </button>
                </div>
              </div>
              <div className="col-12 col-lg mb-3 mb-lg-0">{totalPrice}</div>
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
}

export default CartItem;
