import React from 'react';
import { BsSquareFill } from 'react-icons/bs';

function Summary(props) {
  const { type } = props;
  return (
    <>
      <div className="row mt-3 mt-lg-5 justify-content-end gap-2 gap-lg-0">
        <div className="col-lg-6 mx-0 text-lg-center text-end">
          共 6 項{type}
        </div>
        <div className="row col-lg-6 justify-content-lg-center justify-content-end text-end mx-0">
          <div className="col-lg-3 col-6 p-0">{type}金額:</div>
          <div className="col-lg-3 col-4 p-0">26000</div>
        </div>
        <div className="row col-lg-6 justify-content-lg-center justify-content-end text-end mt-3 mx-0">
          <div className="col-lg-3 col-6 d-flex justify-content-end align-items-center p-0">
            <BsSquareFill className="me-2" />
            <p className="fs-4 m-0 fw-bold">{type}總額:</p>
          </div>
          <div className="col-lg-3 col-4 fs-4 p-0">130000</div>
        </div>
      </div>
    </>
  );
}

export default Summary;
