import React, { useState, useContext } from 'react';
import { StateContext } from '../../../../context';
// import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select
} from '@chakra-ui/core';

const CheckoutFormDepr = () => {
  const [{ cart }] = useContext(StateContext);
  console.log(cart);
  const artworkIdArray = cart.map(({ artwork_id }) => artwork_id);
  // const totalPriceAgain = cart.map(({ price }) => price).reduce((a, b) => a + b, 0);
  // const totalPriceAgainAgain = cart.reduce((a, b) => a + b.price, 0);
  const totalPrice = cart.reduce((a, { price }) => a + price, 0);
  console.log(totalPrice);
  const [complete, setComplete] = useState(false);
  //input fields template
  const [clientName, setClientName] = useState('');
  let shouldBeDisabled = true;
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
          artworkIdArray,
          clientName
        };
        axios
          .post('/api/checkout', theData)
          .then(({ data }) => {
            console.log(data);
            setComplete(true);
          })
          .catch(err => console.log('ERROR!!!!\n', err));
      }
    });
    handler.open({
      name: 'Pay Now',
      description: 'Stripey Stripe',
      amount: totalPrice * 100
    });
  };

  if (complete) return <h1>Purchase Complete</h1>;
  // next line (clientName && clientEmail (Regex))
  // const clientNameIsValid = !!clientName;
  const clientNameIsValid = clientName.length > 3;
  if (clientNameIsValid) shouldBeDisabled = false;
  return (
    // input fields for guest's info - name, address, etc before Stripe
    <FormControl isRequired onSubmit={submit}>
      <FormLabel htmlFor='fname'>First name</FormLabel>
      <Input id='fname' placeholder='First name' />
      <FormLabel htmlFor='lname'>Last name</FormLabel>
      <Input id='lname' placeholder='Last name' />
      <FormLabel htmlFor='address'>Street Address</FormLabel>
      <Input id='address' placeholder='Street address' />
      <FormLabel htmlFor='city'>City</FormLabel>
      <Input id='city' placeholder='City' />
      <FormLabel htmlFor='state'>State</FormLabel>
      <Select id='state' placeholder='State' />
      <FormLabel htmlFor='zip'>Zip Code</FormLabel>
      <Input id='zip' placeholder='Zip Code' />

      <form className='checkout' onSubmit={submit}>
        {/*input fields template below*/}
        <input
          name='clientName'
          onChange={({ target: { value: name } }) => {
            setClientName(name);
          }}
        />
        <p>Would you like to complete the purchase?</p>

        {/*<CardElement />*/}
        <button disabled={shouldBeDisabled}>Purchase</button>
      </form>
    </FormControl>
  );
};

export default CheckoutFormDepr;
// export default injectStripe(CheckoutForm);
