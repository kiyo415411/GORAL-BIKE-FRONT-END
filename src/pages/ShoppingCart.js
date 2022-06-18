import React, { useState } from 'react';
import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';

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
        <Summary />
        {/* 按鈕群組 */}
        <section className="row justify-content-md-between text-end gap-3 gap-md-0 mb-5">
          <div className="col-md-2 col-12">
            <button className="btn btn-outline-primary rounded-0 fs-4 fw-bold">
              移除商品
            </button>
          </div>
          <div className="col-md-3 col-12">
            <button className="btn btn-outline-primary rounded-0 fs-4 fw-bold me-md-5 me-3">
              返回購物
            </button>
            <button className="btn btn-primary rounded-0 fs-4 fw-bold">
              商品結帳
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShoppingCart;
