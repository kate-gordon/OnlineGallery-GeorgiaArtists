import React, { useRef } from 'react';
import Checkout from 'react-stripe-checkout';

import './paymentform.css';

function PaymentForm() {
  const time = useRef(0);
  const timer = useRef(null);

  function onToken(token) {
    clearInterval(timer.current);
    alert(`Time to fill out form: ${time.current / 1000} seconds`);
    time.current = 0;
  }

  function onOpened() {
    timer.current = setInterval(() => {
      time.current += 1000;
    }, 1000);
  }

  return (
    <div className='PaymentForm'>
      <Checkout
        name='Checkout'
        description='Complete your purchase to support Georgia Arists with DisAbilities'
        label='Checkout'
        panelLabel='Submit Payment'
        amount={1000000}
        currency='USD'
        shippingAddress
        billingAddress
        stripeKey='pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5'
        token={onToken}
        opened={onOpened}
      />
    </div>
  );
}

export default PaymentForm;
