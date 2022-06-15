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
  const [open, setOpen] = useState(true);
  const { products, type } = props;

  if ((type === '課程') | (type === '活動')) {
    return (
      <>
        <section className="shopping-cart py-3 px-lg-5 px-3">
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
            <h2>{type}</h2>
          </div>
          <Collapse in={open}>
            <div id="example-collapse-text">
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
              {/* details */}
              {products.map((product, i) => {
                return (
                  <CartItem
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    count={product.count}
                    type={type}
                  />
                );
              })}
              {/* details-end */}
              {/* summary */}
              <Summary type={type} />
              {/* summary-end */}
            </div>
          </Collapse>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="shopping-cart py-3 px-lg-5 px-3">
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
            <h2>{type}</h2>
          </div>
          <Collapse in={open}>
            <div id="example-collapse-text">
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
              {/* details */}
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
              <Summary type={type} />
              {/* summary-end */}
            </div>
          </Collapse>
        </section>
      </>
    );
  }
}

export default CartList;
