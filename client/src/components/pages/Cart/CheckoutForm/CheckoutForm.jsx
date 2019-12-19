import React, { useContext, useState } from 'react';
import { StateContext } from '../../../../context';
import Checkout from 'react-stripe-checkout';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Button } from '@chakra-ui/core';

const CheckoutForm = props => {
  const [{ cart }] = useContext(StateContext);
  const [value, dispatch] = useContext(StateContext);
  const [redirect, setRedirect] = useState([]);
  const totalPrice = cart.reduce((a, { price }) => a + price, 0);
  const onClose = () => {
    let idArray = [];
    cart.map(item => idArray.push(item.artwork_id));
    axios.post('http://admin.insae.org/api/artworks/sold', { ids: idArray });
    dispatch({
      type: 'clearCart'
    });
    const updateArt = props.fetchArtPieceData;
    setRedirect(false);
  };
  return (
    <div className='checkoutForm btn btn-primary'>
      <Checkout
        label='Checkout'
        name='Checkout'
        description='Complete your purchase'
        panelLabel='Submit Payment'
        amount={totalPrice * 100}
        currency='USD'
        shippingAddress
        billingAddress
        stripeKey='pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5'
        token={onClose}
        allowRememberMe='false'
        style={{
          color: 'gray.900',
          backgroundColor: 'gray.100',
          fontSize: '1.2em',
          padding: '20px'
        }}
        _hover={{ color: 'gray.900', backgroundColor: 'gray.100' }}
      />
      {redirect ? '' : <Redirect to='/order' />}
    </div>
  );
};

export default CheckoutForm;
