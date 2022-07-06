import React from 'react';
import { BsSquareFill } from 'react-icons/bs';
import { toThousands } from '../../utils/common';

function CheckoutSummary(props) {
  const { allCartTotal, className } = props;
  return (
    <>
      <section
        className={
          className
            ? 'checkout-summary row text-end ' + className
            : 'checkout-summary row text-end'
        }
      >
        <div className="row col-md-12 col-12 justify-content-end mb-2">
          <div className="line"></div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">總計</div>
          <div className="col-md-2 col">$ {toThousands(allCartTotal)}</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">折扣金額</div>
          <div className="col-md-2 col">0</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end  mb-2">
          <div className="col-md-2 col">優惠碼</div>
          <div className="col-md-2 col">未使用優惠碼</div>
        </div>
        <div className="row col-md-12 col-12 text-primary fs-4 fw-bold justify-content-end mb-5">
          <div className="col-md-2 col">
            <BsSquareFill className="me-2 text-highlight" />
            應付金額
          </div>
          <div className="col-md-2 col">$ 200,000</div>
        </div>
      </section>
    </>
  );
}

export default CheckoutSummary;
