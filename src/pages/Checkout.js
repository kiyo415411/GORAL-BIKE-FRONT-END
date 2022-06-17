import React from 'react';
import CheckoutList from '../components/Checkout/CheckoutList';
import CheckoutSummary from '../components/Checkout/CheckoutSummary';

function Checkout() {
  return (
    <div className="container">
      <CheckoutList />
      <section className="receive-info"></section>
      <CheckoutSummary />
    </div>
  );
}

export default Checkout;
