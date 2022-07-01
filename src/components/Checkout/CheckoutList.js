import React from 'react';
import { toThousands } from '../../utils/common';
import { IMAGE_URL } from '../../utils/config';

function CheckoutList(props) {
  const { productCart, type } = props;
  // console.log(productCart);
  const { cart } = productCart;
  // console.log(cart);
  const { checkedItems, totalCheckItems, cartTotal } = cart;

  return (
    <>
      <section className="checkout-list mt-3 mb-5">
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
        {checkedItems.map((item, index) => {
          const { id, name, image, price, quantity, itemTotal } = item;
          let category = '';
          if (type === '商品') {
            category = 'bikes';
          } else if (type === '課程') {
            category = 'course';
          } else {
            category = 'activity';
          }
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
          <div className="col-lg-2">總共 {totalCheckItems} 項商品</div>
          <div className="row col-lg-4">
            <div className="col">商品金額</div>
            <div className="col">$ {toThousands(cartTotal)}</div>
          </div>
        </div>
        {/* listSummary */}
      </section>
    </>
  );
}

export default CheckoutList;
