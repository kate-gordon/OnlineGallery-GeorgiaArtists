import React from 'react';
import StripeButton from '../../Stripe/StripeButton';
import PaymentForm from '../Checkout';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <StripeButton />
    </div>
  );
};

export default Checkout;
