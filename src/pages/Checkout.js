import React, { useState } from 'react';
import CheckoutList from '../components/Checkout/CheckoutList';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';
import PaymentInfo from '../components/Checkout/PaymentInfo';
import RecipientInfo from '../components/Checkout/RecipientInfo';
import { useProductCart } from '../utils/useProductCart';
import { useCourseCart } from '../utils/useCourseCart';
import { useActivityCart } from '../utils/useActivityCart';
import { useCart } from '../utils/useCart';
import axios from 'axios';
import { API_URL } from '../utils/config';
import { useLogin } from '../utils/useLogin';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const history = useNavigate();

  const cart = useCart();
  const { allCartTotal } = cart;
  const login = useLogin();
  const { isLogin, userData } = login;
  if (!isLogin) {
    Swal.fire({
      icon: 'error',
      html: '請先登入會員帳號',
      confirmButtonText: 'OK',
      focusConfirm: false,
      allowOutsideClick: false,
      // buttonsStyling: false,
      // customClass: {
      // },
    }).then((result) => {
      if (result.isConfirmed) {
        history('/homepage');
      }
    });
  }
  const productCart = useProductCart();
  const courseCart = useCourseCart();
  const activityCart = useActivityCart();
  const productCheckout = productCart.checkedItems.length;
  const courseCheckout = courseCart.checkedItems.length;
  const activityCheckout = activityCart.checkedItems.length;
  const [recipientInfo, setRecipientInfo] = useState({
    recipient: '',
    phone: '',
    email: '',
    address: '',
    delivery: 1,
    note: '',
  });
  const [payment, setPayment] = useState(1);
  const handleRecipientChange = (e) => {
    const newRecipientInfo = {
      ...recipientInfo,
      [e.target.name]: e.target.value,
    };
    setRecipientInfo(newRecipientInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 將結帳商品跟收件資訊寫進訂單的 table
    const orderRes = await axios.post(
      `${API_URL}/cart`,
      {
        user_id: userData.userId,
        recipientInfo: recipientInfo,
        product_total: productCart.cart.cartTotal,
        course_total: courseCart.cart.cartTotal,
        activity_total: activityCart.cart.cartTotal,
        total: allCartTotal,
        order_status_id: 1,
        payment_status_id: 2,
        payment_method_id: payment,
        product_item: productCart.checkedItems,
        course_item: courseCart.checkedItems,
        activity_item: activityCart.checkedItems,
      },
      {
        withCredentials: true,
      }
    );
    console.log(orderRes);
    const orderData = orderRes.data;
    if (orderData.code === 200) {
      Swal.fire({
        icon: 'success',
        html: orderData.msg,
        confirmButtonText: 'OK',
        focusConfirm: false,
        // buttonsStyling: false,
        // customClass: {
        // },
      }).then((result) => {
        if (result.isConfirmed) {
          setRecipientInfo({
            recipient: '',
            phone: '',
            email: '',
            address: '',
            delivery: 1,
            note: '',
          });
          productCart.checkoutCart();
          courseCart.checkoutCart();
          activityCart.checkoutCart();
          history('/homepage');
        }
      });
    }
  };
  return (
    <div className="container mt-nav">
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
          <RecipientInfo
            handleRecipientChange={handleRecipientChange}
            recipientInfo={recipientInfo}
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
