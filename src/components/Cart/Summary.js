import React from 'react';

function Summary() {
  return (
    <>
      <div className="row mt-3 mt-lg-5 justify-content-end">
        <div className="row col-lg-6 mx-0 flex-column align-items-center">
          <div className="col-lg-3 col-6 text-lg-start">共 6 項商品</div>
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
    </>
  );
}

export default Summary;
