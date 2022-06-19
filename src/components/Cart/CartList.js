import React, { useState } from 'react';

import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

// const products = [
//   {
//     img: '../images/products/BIG_NINE_15.jpg',
//     name: 'BIG_NINE_15',
//     count: 1,
//     price: '$22,000',
//   },
// ];

function CartList(props) {
  const [open, setOpen] = useState(true);
  const { productCart, products, type } = props;

  if ((type === '課程') | (type === '活動')) {
    return (
      <>
        <section className="shopping-cart py-3 px-lg-5 px-2">
          <div className="d-flex mb-3">
            {/* 收合購物車按鈕 */}
            <Button
              className="shopping-cart__tri-btn"
              type="button"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-area"
              aria-expanded={open}
            >
              {open ? <VscTriangleDown /> : <VscTriangleRight />}
            </Button>
            <h2>{type}</h2>
          </div>
          {/* 收合區域 */}
          <Collapse in={open}>
            <div id="collapse-area">
              {/* thead */}
              <div className="d-md-block border-bottom text-center d-none">
                <div className="row">
                  <div className="col-lg-1">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="col-lg-2">圖片</div>
                  <div className="row col-lg-7 mx-0">
                    <div className="col">名稱</div>
                    <div className="col">單價</div>
                  </div>
                  <div className="col-lg-1">收藏</div>
                  <div className="col-lg-1">移除</div>
                </div>
              </div>
              {/* thead */}
              {/* tbody */}
              {products.map((product, i) => {
                return (
                  <CartItem
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    count={product.count}
                    type={type}
                    key={product.id}
                  />
                );
              })}
              {/* tbody */}
              <CartSummary type={type} />
            </div>
          </Collapse>
        </section>
      </>
    );
  } else {
    const { cart, items, removeItem, plusOne, minusOne } = productCart;
    console.log(cart);
    console.log(items);
    return (
      <>
        <section className="shopping-cart py-3 px-lg-5 px-2">
          <div className="d-flex mb-3">
            {/* 收合購物車按鈕 */}
            <Button
              className="shopping-cart__tri-btn"
              type="button"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-area"
              aria-expanded={open}
            >
              {open ? <VscTriangleDown /> : <VscTriangleRight />}
            </Button>
            <h2>{type}</h2>
          </div>
          {/* 收合區域 */}
          <Collapse in={open}>
            <div id="collapse-area">
              {/* thead */}
              <div className="d-md-block border-bottom text-center d-none">
                <div className="row">
                  <div className="col-lg-1">
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="col-lg-2">圖片</div>
                  <div className="row col-lg-7 mx-0">
                    <div className="col">名稱</div>
                    <div className="col">單價</div>
                    <div className="col">數量</div>
                    <div className="col">總價</div>
                  </div>
                  <div className="col-lg-1">收藏</div>
                  <div className="col-lg-1">移除</div>
                </div>
              </div>
              {/* thead */}
              {/* tbody */}
              {items.map((product, i) => {
                return (
                  <CartItem
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    itemTotal={product.itemTotal}
                    key={product.id}
                    removeItem={removeItem}
                    plusOne={plusOne}
                    minusOne={minusOne}
                  />
                );
              })}
              {/* tbody */}
              <CartSummary type={type} />
            </div>
          </Collapse>
        </section>
      </>
    );
  }
}

export default CartList;
