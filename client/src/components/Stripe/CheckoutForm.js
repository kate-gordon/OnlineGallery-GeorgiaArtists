import React, { Component } from 'react';
// import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    ev.preventDefault(ev);
    const pKey = 'pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5';
    const handler = window.StripeCheckout.configure({
      key: pKey,
      locale: 'auto',
      token: token => {
        const theData = {
          amount: 2000,
          stripeToken: token.id,
          token: '123abc123abc',
          email: 'susan@something.com'
        };
        axios
          .post('/api/checkout', theData)
          .then(({ data }) => console.log(data))
          .catch(err => console.log('ERROR!!!!\n', err));
      }
    });
    handler.open({
      name: 'Pay Now',
      description: 'Stripey Stripe',
      amount: 2000
    });
    // const { client_secret } = await fetch('/secret');
    // this.props.stripe.handleCardPayment(client_secret, {
    //   billing_details: { name: 'Jenny Rosen' }
    // });
    // console.log(client_secret);
    // const cardElement = this.props.elements.getElement('card');
    // this.props.stripe
    //   .createPaymentMethod({
    //     type: 'card',
    //     card: cardElement,
    //     billing_details: { name: 'Jenny Rosen' }
    //   })
    //   .then(({ paymentMethod }) => {
    //     console.log('Received Stripe PaymentMethod:', paymentMethod);
    //   });

    // let { token } = await this.props.stripe.createToken({ name: 'Name' });
    // let response = await fetch('/charge', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'text/plain' },
    //   body: token.id
    // });

    // if (response.ok) this.setState({ complete: true });
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <form className='checkout' onSubmit={this.submit}>
        <p>Would you like to complete the purchase?</p>
        {/*<CardElement />*/}
        <button>Purchase</button>
      </form>
    );
  }
}

export default CheckoutForm;
// export default injectStripe(CheckoutForm);
