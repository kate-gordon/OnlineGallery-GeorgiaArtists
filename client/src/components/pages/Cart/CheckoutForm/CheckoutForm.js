import React, { useState, useContext } from 'react';
import { StateContext } from '../../../../context';
// import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

const CheckoutForm = () => {
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
          token: '123abc123abc',
          email: 'susan@something.com',
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
  );
};

export default CheckoutForm;
// export default injectStripe(CheckoutForm);
