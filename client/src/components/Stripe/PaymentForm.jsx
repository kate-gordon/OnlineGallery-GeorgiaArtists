import React from 'react';
// import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';

import './paymentform.css';

class PaymentForm extends React.Component {
  // setButtonNode = elem => (this.elemButton = elem);

  // onSubmit = e => {
  //   e.preventDefault();
  //   this.elemButton.click();
  // };

  render() {
    return (
      <h2>checking</h2>
      // <form onSubmit={this.onSubmit}>
      //   <StripeCheckout
      //     key='pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5'
      //     amount='999'
      //     name='Gallery Checkout'
      //     description='Complete your purchase'
      //     image='https://stripe.com/img/documentation/checkout/marketplace.png'
      //     locale='auto'
      //     zipCode
      //     billingAddress
      //   >
      //     <button ref={this.setButtonNode}>Checkout</button>
      //   </StripeCheckout>
      //   <input type='submit' />
      // </form>
    );
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<PaymentForm />, rootElement);

export default PaymentForm;
