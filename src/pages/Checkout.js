import React from 'react';
import { BsSquareFill } from 'react-icons/bs';

function Checkout() {
  return (
    <div className="container">
      <section className="checkout-summary row text-end">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <div className="line"></div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">總計</div>
          <div className="col-md-2 col">200000</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">折扣金額</div>
          <div className="col-md-2 col">0</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end  mb-2">
          <div className="col-md-2 col">優惠碼</div>
          <div className="col-md-2 col">未使用優惠碼</div>
        </div>
        <div className="row col-md-12 col-12 fs-4 fw-bold justify-content-end mb-5">
          <div className="col-md-2 col">
            <BsSquareFill className="me-2 text-highlight" />
            應付金額
          </div>
          <div className="col-md-2 col">200000</div>
        </div>
        <div className="col-md-12 col-12 text-end end-row">
          <button className="btn btn-primary rounded-0 fs-4 fw-bold">
            下訂單
          </button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
