import React, { useRef } from 'react';
import Checkout from 'react-stripe-checkout';

import './paymentform.css';

export default () => {
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
    <div className='Hotkey'>
      <h1>Test test</h1>
      <Checkout
        name='Auto Hotkeys'
        description='Save Time With Hotstrings'
        label='Annoying Form'
        panelLabel='Yet Another Form'
        email='already-know-this@email.com'
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
};
