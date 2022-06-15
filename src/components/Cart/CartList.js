import React, { useState } from 'react';

import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import CartItem from './CartItem';
import Summary from './Summary';

// const products = [
//   {
//     img: '../images/products/BIG_NINE_15.jpg',
//     name: 'BIG_NINE_15',
//     count: 1,
//     price: '$22,000',
//     totalPrice: '$44,000',
//   },
// ];

function CartList(props) {
  const [open, setOpen] = useState(false);
  const { products } = props;

  return (
    <>
      <section className="shopping-cart">
        <div className="d-flex mb-3">
          <Button
            className="shopping-cart__tri-btn"
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? <VscTriangleDown /> : <VscTriangleRight />}
          </Button>
          <h2>商品</h2>
        </div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            {/* details */}
            <div className="d-md-flex row border-bottom text-center d-none">
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
            {products.map((product, i) => {
              return (
                <CartItem
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  count={product.count}
                  totalPrice={product.totalPrice}
                />
              );
            })}
            {/* details-end */}
            {/* summary */}
            <Summary />
          </div>
          {/* summary-end */}
        </Collapse>
      </section>
    </>
  );
}

export default CartList;
