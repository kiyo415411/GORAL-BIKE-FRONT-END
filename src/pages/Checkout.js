import React, { useState } from 'react';
import CheckoutList from '../components/Checkout/CheckoutList';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import PaymentInfo from '../components/Checkout/PaymentInfo';
import ReceiverInfo from '../components/Checkout/ReceiverInfo';

function Checkout() {
  const [receiverInfo, setReceiverInfo] = useState({
    receiver_name: '',
    phone: '',
    email: '',
    address: '',
    delivery: 'home-delivery',
    note: '',
  });
  const [payment, setPayment] = useState('');
  const handleReceiverChange = (e) => {
    const newReceiverInfo = {
      ...receiverInfo,
      [e.target.name]: e.target.value,
    };
    setReceiverInfo(newReceiverInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(receiverInfo);
    console.log(payment);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        {/* 結帳訂單清單 */}
        <CheckoutList />
        {/* 收件人資訊 */}
        <ReceiverInfo
          handleReceiverChange={handleReceiverChange}
          receiverInfo={receiverInfo}
        />
        {/* 付款資訊 */}
        <PaymentInfo payment={payment} setPayment={setPayment} />
        {/* 結帳金額計算 */}
        <CheckoutSummary />
        <div className="text-end mb-5">
          <button
            className="btn btn-primary rounded-0 fs-4 fw-bold"
            type="submit"
          >
            前往付款
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
