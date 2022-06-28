import React, { useState } from 'react';
import CheckoutList from '../components/Checkout/CheckoutList';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import PaymentInfo from '../components/Checkout/PaymentInfo';
import ReceiverInfo from '../components/Checkout/ReceiverInfo';
import { useProductCart } from '../utils/useProductCart';
import { useCourseCart } from '../utils/useCourseCart';
import { useActivityCart } from '../utils/useActivityCart';
import { useCart } from '../utils/useCart';

function Checkout() {
  const cart = useCart();
  const { allCartTotal } = cart;
  const productCart = useProductCart();
  const courseCart = useCourseCart();
  const activityCart = useActivityCart();
  const productCheckout = productCart.cart.checkedItems.length;
  const courseCheckout = courseCart.cart.checkedItems.length;
  const activityCheckout = activityCart.cart.checkedItems.length;
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
    productCart.checkoutCart();
    courseCart.checkoutCart();
    activityCart.checkoutCart();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {/* 結帳商品清單 */}
        {productCheckout ? (
          <CheckoutList productCart={productCart} type="商品" />
        ) : null}
        {/* 結帳課程清單 */}
        {courseCheckout ? (
          <CheckoutList productCart={courseCart} type="課程" />
        ) : null}
        {/* 結帳活動清單 */}
        {activityCheckout ? (
          <CheckoutList productCart={activityCart} type="活動" />
        ) : null}
        {/* 收件人資訊 */}
        {productCheckout ? (
          <ReceiverInfo
            handleReceiverChange={handleReceiverChange}
            receiverInfo={receiverInfo}
          />
        ) : null}
        {/* 付款資訊 */}
        <PaymentInfo payment={payment} setPayment={setPayment} />
        {/* 結帳金額計算 */}
        <CheckoutSummary allCartTotal={allCartTotal} />
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
