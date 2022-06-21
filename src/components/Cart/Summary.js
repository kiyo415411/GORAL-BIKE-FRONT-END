import React from 'react';
import { BsSquareFill } from 'react-icons/bs';
import { toThousands } from '../../utils/common';

function Summary({ allCartTotal }) {
  return (
    <>
      <section className="summary row text-end">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <div className="line"></div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">總計</div>
          <div className="col-md-2 col">${toThousands(allCartTotal)}</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end mb-2">
          <div className="col-md-2 col">折扣金額</div>
          <div className="col-md-2 col">0</div>
        </div>
        <div className="row col-md-12 col-12 fs-6 justify-content-end align-items-center mb-md-1 mb-2">
          <div className="col-md-2 col-3">優惠碼</div>
          <div className="col-md-2 col-9">
            <select className="form-select" name="" id="">
              <option>目前沒有可用的折價卷</option>
            </select>
          </div>
        </div>
        <div className="row col-md-12 col-12 fs-4 fw-bold justify-content-end mb-5">
          <div className="col-md-2 col">
            <BsSquareFill className="me-2 text-highlight" />
            應付金額
          </div>
          <div className="col-md-2 col">200000</div>
        </div>
      </section>
    </>
  );
}

export default Summary;
