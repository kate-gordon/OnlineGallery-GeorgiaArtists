import React, { useContext, useState } from 'react';
import { StateContext } from '../../../../context';
import Checkout from 'react-stripe-checkout';
import axios from 'axios';

import './checkout2.css';

const Checkout2 = () => {
  const [{ cart }] = useContext(StateContext);
  console.log(cart);
  const artworkIdArray = cart.map(({ artwork_id }) => artwork_id);
  const totalPrice = cart.reduce((a, { price }) => a + price, 0);
  console.log(totalPrice);
  // const [complete, setComplete] = useState(false);
  const submit = async ev => {
    ev.preventDefault(ev);
    const pKey = 'pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5';
    const handler = window.StripeCheckout.configure({
      key: pKey,
      locale: 'auto',
      token: token => {
        const theData = {
          amount: totalPrice * 100,
          stripeToken: token.id,
          token: '123abc123',
          email: 'puja@something.com',
          artworkIdArray
        };
        axios
          .post('/api/checkout', theData)
          .then(({ data }) => {
            console.log(data);
            // setComplete(true);
          })
          .catch(err => console.log('ERROR!!!!\n', err));
      }
    });
    handler.open();
    console.log(cart);
  };
  return (
    <div className='checkout2'>
      <Checkout
        label='Checkout'
        name='Checkout'
        description='Complete your purchase'
        panelLabel='Submit Payment'
        amount={1000000}
        currency='USD'
        shippingAddress
        billingAddress
        stripeKey='pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5'
      />
    </div>
  );
};

export default Checkout2;
