import React from 'react';
import { FaUser } from 'react-icons/fa';

function ReceiverInfo(props) {
  const { receiverInfo, handleReceiverChange } = props;
  return (
    <>
      <section className="mb-4">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-2">
              <FaUser />
              <span className="ms-2 fs-5">收件人資訊</span>
            </div>
            <div className="mb-3 row">
              <label className="form-label col-md-2 text-end">收件人姓名</label>
              <div className="col-md-4">
                <input
                  name="receiver_name"
                  type="text"
                  className="form-control"
                  placeholder="請輸入收件人姓名"
                  value={receiverInfo.receiver_name}
                  onChange={handleReceiverChange}
                  required
                />
              </div>
              <label className="form-label col-md-2 text-end">手機</label>
              <div className="col-md-4">
                <input
                  name="phone"
                  type="text"
                  className="form-control "
                  placeholder="請輸入手機"
                  value={receiverInfo.phone}
                  onChange={handleReceiverChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="form-label col-md-2 text-end">Email</label>
              <div className="col-md-10">
                <input
                  name="email"
                  type="email"
                  className="form-control "
                  placeholder="請輸入電子信箱"
                  value={receiverInfo.email}
                  onChange={handleReceiverChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="form-label col-md-2 text-end">地址</label>
              <div className="col-md-10">
                <input
                  name="address"
                  type="text"
                  className="form-control "
                  placeholder="請輸入地址"
                  value={receiverInfo.address}
                  onChange={handleReceiverChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="form-label text-end col-md-2">運送方式</label>
              <div className="col-md-4">
                <select
                  className="form-select"
                  name="delivery"
                  onChange={handleReceiverChange}
                  value={receiverInfo.delivery}
                  required
                >
                  <option value="store-pickup">門市自取</option>
                  <option value="home-delivery">宅配到府</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label fs-5">備註欄</label>
            <textarea
              className="form-control"
              rows="3"
              name="note"
              onChange={handleReceiverChange}
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReceiverInfo;
