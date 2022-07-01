import React from 'react';
import { FaUser } from 'react-icons/fa';

// const recipientInfo = {
//   recipient: '',
//   phone: '',
//   email: '',
//   address: '',
//   delivery: 'home-delivery',
//   note: '',
// }

function ReceiverInfo(props) {
  const { recipientInfo, handleRecipientChange } = props;
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
                  name="recipient"
                  type="text"
                  className="form-control"
                  placeholder="請輸入收件人姓名"
                  value={recipientInfo.recipient}
                  onChange={handleRecipientChange}
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
                  value={recipientInfo.phone}
                  onChange={handleRecipientChange}
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
                  value={recipientInfo.email}
                  onChange={handleRecipientChange}
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
                  value={recipientInfo.address}
                  onChange={handleRecipientChange}
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
                  onChange={handleRecipientChange}
                  required
                  value={recipientInfo.delivery}
                >
                  <option value={1}>門市自取</option>
                  <option value={2}>宅配到府</option>
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
              value={recipientInfo.note}
              onChange={handleRecipientChange}
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReceiverInfo;
