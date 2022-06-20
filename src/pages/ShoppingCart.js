import React from 'react';
import CartList from '../components/Cart/CartList';
import Summary from '../components/Cart/Summary';
import { useProductCart } from '../utils/useProductCart';

// const products = [
//   {
//     id: 1,
//     name: 'BIG_NINE_15',
//     image: 'BIG_NINE_15.jpg',
//     price: 22000,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: 'BIG_NINE_13',
//     image: 'BIG_NINE_15.jpg',
//     price: 12000,
//     quantity: 1,
//   },
// ];

// TODO: 傳到結帳頁面，結帳頁面只讀取 checkedItems 做呈現
// TODO: 結完帳清除 checkItems 陣列，以及 localStorage 裡 checked = true 的產品
const course = [
  {
    id: 1,
    name: '初階課程',
    image: 'BIG_NINE_15.jpg',
    price: '$6,000',
  },
  {
    id: 2,
    name: '進階課程',
    image: 'BIG_NINE_15.jpg',
    price: '$4,000',
  },
];
const activities = [
  {
    id: 1,
    name: '小活動',
    image: 'BIG_NINE_15.jpg',
    price: '$2,000',
  },
  {
    id: 2,
    name: '大活動',
    image: 'BIG_NINE_15.jpg',
    price: '$2,000',
  },
];

function ShoppingCart() {
  // useEffect(() => {
  //   localStorage.setItem('productCart', JSON.stringify(products));
  // }, []);
  const productCart = useProductCart();

  return (
    <>
      <div className="container">
        {/* 商品購物車 */}
        <CartList productCart={productCart} type="商品" />
        {/* 課程購物車 */}
        {/* <CartList products={course} type="課程" /> */}
        {/* 活動購物車 */}
        {/* <CartList products={activities} type="活動" /> */}
        {/* 三個購物車加總 */}
        <Summary />
        {/* 按鈕群組 */}
        <section className="d-flex justify-content-end text-end mb-5">
          <div>
            <button className="btn btn-outline-primary rounded-0 fs-4 fw-bold me-md-5 me-3">
              返回購物
            </button>
            <button
              className="btn btn-primary rounded-0 fs-4 fw-bold"
              onClick={() => {
                productCart.checkoutCart();
              }}
            >
              商品結帳
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShoppingCart;
