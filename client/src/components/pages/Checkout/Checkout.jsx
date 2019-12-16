import React from 'react';
// import StripeButton from '../../Stripe/StripeButton';
// import PaymentForm from '../Checkout';
// import HotkeyForm from '../../Stripe/HotkeyForm';
import CheckoutForm from '../Cart/CheckoutForm/CheckoutForm';
// import { Elements, StripeProvider } from 'react-stripe-elements';

const Checkout = () => {
  return (
    // <StripeProvider
    //   apiKey='pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5
    // '
    // >
    //   <div>
    //     <h1>Checkout</h1>
    //     <Elements>
    <CheckoutForm />
    //     </Elements>
    //   </div>
    // </StripeProvider>
  );
};

export default Checkout;
