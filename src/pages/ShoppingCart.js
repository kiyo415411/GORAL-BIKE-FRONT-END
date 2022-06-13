import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { VscTriangleDown, VscTriangleRight } from 'react-icons/vsc';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const products = [
  {
    img: '../images/products/BIG_NINE_15.jpg',
    name: 'BIG_NINE_15',
    count: 1,
    price: '$22,000',
    totalPrice: '$44,000',
  },
];

function ShoppingCart() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container">
        {/* 商品購物車 */}
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
                  <div className="col">數量</div>
                  <div className="col">單價</div>
                  <div className="col">總價</div>
                </div>
                <div className="col-lg-1">收藏</div>
                <div className="col-lg-1">移除</div>
              </div>
              <div className="row border-bottom text-center align-items-center shopping-cart__detail px-2 px-lg-0">
                <div className="col-lg-1 col-1">
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="col-lg-2 col-4 figure">
                  <img
                    src={require('../images/products/BIG_NINE_15.jpg')}
                    className="figure-img img-fluid p-2"
                    alt="..."
                  />
                </div>
                <div className="col-lg-7 col-5 row mx-0 ">
                  <div className="col-12 col-lg-3 text-highlight fw-bold">
                    {products[0].name}
                  </div>
                  <div className="col-12 col-lg-3">{products[0].price}</div>
                  <div className="col-12 col-lg-3">{products[0].count}</div>
                  <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                    {products[0].totalPrice}
                  </div>
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
              {/* details-end */}
              {/* summary */}
              <div className="row mt-3 mt-lg-5 justify-content-end">
                <div className="row col-lg-6 mx-0 flex-column align-items-center">
                  <div className="col-lg-3 col-6 text-lg-start">
                    共 6 項商品
                  </div>
                  <div className="col-lg-3 col-6 text-lg-start">
                    <select>
                      <option value="">優惠碼選擇</option>
                    </select>
                  </div>
                </div>
                <div className="row col-lg-6 mx-0">
                  <div className="row col-lg-12 justify-content-center mx-0">
                    <div className="col-lg-3 col-6 text-end">商品金額:</div>
                    <div className="col-lg-3 col-6">26000</div>
                  </div>
                  <div className="row col-lg-12 justify-content-center mx-0">
                    <div className="col-lg-3 col-6 text-end">折扣金額:</div>
                    <div className="col-lg-3 col-6">-2000</div>
                  </div>
                </div>
                <div className="col-lg-6 row justify-content-center mx-0">
                  <div className="col-lg-3 col-6 text-end">商品總額:</div>
                  <div className="col-lg-3 col-6">130000</div>
                </div>
              </div>
            </div>
            {/* summary-end */}
          </Collapse>
        </section>
        {/* 課程購物車 */}
        <section></section>
        {/* 活動購物車 */}
        <section></section>
      </div>
    </>
  );
}

export default ShoppingCart;
