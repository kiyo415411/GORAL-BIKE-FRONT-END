import React from 'react';
import { BsCashStack } from 'react-icons/bs';

function PaymentInfo(props) {
  const { payment, setPayment } = props;
  return (
    <>
      <section className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-2">
              <BsCashStack />
              <span className="ms-2 fs-5">付款資訊</span>
            </div>
            <div className="mb-3 row">
              <label className="form-label col-md-2 text-sm-end">
                付款方式
              </label>
              <div className="col-md-4">
                <select
                  className="form-select"
                  name="payment"
                  value={payment}
                  onChange={(e) => {
                    const newPayment = e.target.value;
                    setPayment(newPayment);
                  }}
                  required
                >
                  <option value={1}>信用卡</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentInfo;
