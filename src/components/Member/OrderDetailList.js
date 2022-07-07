import { useEffect } from 'react';
import { useState } from 'react';
import { toThousands } from '../../utils/common';
import { IMAGE_URL } from '../../utils/config';
import React from 'react';

function OrderDetailList(props) {
  const { products, type, category } = props;

  const calculateTotalItems = (items) => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };
  const calculateItemsTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  return (
    <>
      <section className="mt-3 mb-5 px-5">
        <h3 className="text-primary mb-4">訂單{type}明細</h3>
        {/* thead */}
        <div className="row text-center fs-5 mb-2 mx-0">
          <div className="col-lg-2">圖片</div>
          <div className="col-lg-4">名稱</div>
          <div className="col-lg-2">單價</div>
          <div className="col-lg-2">數量</div>
          <div className="col-lg-2">總價</div>
        </div>
        {/* thead */}
        {/* tbody */}
        {products.map((item, index) => {
          const { id, name, image, price, quantity, itemTotal } = item;
          return (
            <div
              className="row text-center align-items-center mx-0 mb-2"
              key={id}
            >
              <div className="col-lg-2 figure">
                <img
                  src={`${IMAGE_URL}/${category}/${image}`}
                  className="figure-img img-fluid p-2"
                  alt="..."
                />
              </div>
              <div className="col-lg-4">{name}</div>
              <div className="col-lg-2">$ {toThousands(price)}</div>
              <div className="col-lg-2">{quantity}</div>
              <div className="col-lg-2 text-secondary">
                $ {toThousands(itemTotal)}
              </div>
            </div>
          );
        })}

        {/* tbody */}
        {/* listSummary */}
        <div className="row fs-4 text-content text-center justify-content-between pt-3 mx-0 hr">
          <div className="col-lg-3">
            總共 {calculateTotalItems(products)} 項{type}
          </div>
          <div className="row col-lg-4">
            <div className="col">{type}金額</div>
            <div className="col">
              $ {toThousands(calculateItemsTotal(products))}
            </div>
          </div>
        </div>
        {/* listSummary */}
      </section>
    </>
  );
}

export default OrderDetailList;
