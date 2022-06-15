import React, { useState } from 'react';
import CartList from '../components/Cart/CartList';

const products = [
  {
    id: 1,
    name: 'BIG_NINE_15',
    image: '../../images/products/BIG_NINE_15.jpg',
    price: '$22,000',
    count: 1,
    totalPrice: '$22,000',
  },
];

function ShoppingCart() {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        {/* 商品購物車 */}
        <CartList products={products} />
        {/* 課程購物車 */}
        <section></section>
        {/* 活動購物車 */}
        <section></section>
      </div>
    </>
  );
}

export default ShoppingCart;
