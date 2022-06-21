import React from 'react';
import { BsSquareFill } from 'react-icons/bs';
import { toThousands } from '../../utils/common';

// cart = {
//   items: [],
//   checkedItems: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
//   checkedAll: true,
// };

function CartSummary(props) {
  const { type, cart, checkedItemRemove } = props;

  const { cartTotal, totalCheckItems } = cart;
  return (
    <>
      <div className="row mt-3 mt-lg-5 justify-content-end align-items-center gap-2 gap-lg-0">
        <div className="col-lg-4 justify-content-lg-start justify-content-end d-flex">
          <button className="btn btn-primary rounded-0 d-block d-md-none me-3">
            全選
          </button>
          <button
            className="btn btn-outline-primary rounded-0"
            onClick={() => {
              checkedItemRemove();
            }}
          >
            清除勾選項目
          </button>
        </div>
        <div className="col-lg-4 text-lg-center text-end">
          共 {totalCheckItems} 項{type}
        </div>
        <div className="d-flex col-lg-4 justify-content-lg-center justify-content-end text-end mx-0">
          <div className="d-flex justify-content-end align-items-center">
            <BsSquareFill className="me-2" />
            <span className="fs-4 fw-bold">{type}總額:</span>
          </div>
          <div className="fs-4 px-3">${toThousands(cartTotal)}</div>
        </div>
      </div>
    </>
  );
}

export default CartSummary;
