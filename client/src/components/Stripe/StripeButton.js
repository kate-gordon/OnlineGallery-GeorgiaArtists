import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = () => {
  const publishableKey = 'pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5';

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
    };
    axios
      .post('http://localhost:8000/payment', body)
      .then(response => {
        console.log(response);
        alert('Payment Success');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert('Payment Error');
      });
  };
  return (
    <StripeCheckout
      label='Click Me!' //Component button text
      name='Business LLC' //Modal Header
      description='Upgrade to a premium account today.'
      panelLabel='Click Me!' //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default StripeButton;
