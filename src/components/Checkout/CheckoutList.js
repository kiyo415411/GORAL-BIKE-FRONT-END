import React from 'react';

function CheckoutList() {
  return (
    <>
      <section className="checkout-list mb-4">
        <h3 className="text-primary mb-4">訂單商品明細</h3>
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
        <div className="row text-center align-items-center mx-0 mb-2">
          <div className="col-lg-2 figure">
            <img
              src={require('../../images/products/BIG_NINE_15.jpg')}
              className="figure-img img-fluid p-2"
              alt="..."
            />
          </div>
          <div className="col-lg-4">ENTER BICYCLE NAME HERE</div>
          <div className="col-lg-2">$29,900</div>
          <div className="col-lg-2">1</div>
          <div className="col-lg-2 text-secondary">$ 29,900</div>
        </div>
        {/* tbody */}
        {/* listsummary */}
        <div className="row justify-content-end text-content text-center mb-3 mx-0">
          <div className="col-lg-2">小計</div>
          <div className="col-lg-2">$ 149,000</div>
        </div>
        <div className="row fs-4 text-content text-center justify-content-between pt-3 mx-0 hr">
          <div className="col-lg-2">總共 3 項商品</div>
          <div className="row col-lg-4">
            <div className="col">商品金額</div>
            <div className="col">$149,000</div>
          </div>
        </div>
        {/* listsummary */}
      </section>
    </>
  );
}

export default CheckoutList;
