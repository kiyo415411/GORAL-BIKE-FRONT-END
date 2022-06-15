import React, { useState } from 'react';
import CartList from '../components/Cart/CartList';
import { BsSquareFill } from 'react-icons/bs';

const products = [
  {
    id: 1,
    name: 'BIG_NINE_15',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$22,000',
    count: 1,
    totalPrice: '$22,000',
  },
  {
    id: 2,
    name: 'BIG_NINE_15',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$22,000',
    count: 1,
    totalPrice: '$22,000',
  },
];
const course = [
  {
    id: 1,
    name: '初階課程',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$6,000',
  },
  {
    id: 2,
    name: '進階課程',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$4,000',
  },
];
const activities = [
  {
    id: 1,
    name: '小活動',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$2,000',
  },
  {
    id: 2,
    name: '大活動',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$2,000',
  },
];

function ShoppingCart() {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        {/* 商品購物車 */}
        <CartList products={products} type="商品" />
        {/* 課程購物車 */}
        <CartList products={course} type="課程" />
        {/* 活動購物車 */}
        <CartList products={activities} type="活動" />
        {/* 三個購物車加總 */}
        <div className="cart-summary row text-end">
          <div className="col-md-12 d-flex justify-content-end mb-3">
            <div className="line"></div>
          </div>
          <div className="row col-md-12 fs-4 fw-bold justify-content-end mb-5">
            <div className="col-md-2">
              <BsSquareFill className="me-2 text-highlight" />
              總金額
            </div>
            <div className="col-md-2">200000</div>
          </div>
          <div className="row col-md-12 justify-content-between ">
            <div className="col-md-2">
              <button className="btn btn-outline-primary rounded-0 fs-4 fw-bold">
                移除商品
              </button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-outline-primary rounded-0 fs-4 fw-bold me-5">
                返回購物
              </button>
              <button className="btn btn-primary rounded-0 fs-4 fw-bold">
                商品結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
