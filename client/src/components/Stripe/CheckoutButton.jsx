import React from 'react';
import ReactDOM from 'react-dom';
import StripeCheckout from 'react-stripe-checkout';

// import Logo from '../Header/Navbar/logo.png';
import './checkoutbutton.css';

const stripePublicTestKey = 'pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5';

const checkoutUrl = 'localhost:3000/checkout';

class App extends React.Component {
  state = {
    product: 'banana',
    show: true
  };

  handleClose = () => {
    console.log('App#handleClose');
  };
  handleOpen = () => {
    console.log('App#handleOpen');
  };

  handleProductChange = evt => {
    this.setState({ product: evt.target.value });
  };

  toggleShow = () => {
    this.setState(state => ({
      show: !state.show
    }));
  };

  /*::
  type Token = {
    id: string, // "tok_asdf123asdf123asdf123"
    object: "token",
    card: {
      id: string // "card_asdf123asdf123asdf123"
      object: "card"
      address_city: string, // "Anywhere"
      address_country: string, // "United States"
      address_line1: string, // "1234 Main St"
      address_line1_check: string, // "pass"
      address_line2: string, // `null`
      address_state: string, // "AL"
      address_zip: string, // "70000"
      address_zip_check: string, // "pass"
      brand: string, // "Visa"
      country: string, // "US"
      cvc_check: string, // "pass"
      dynamic_last4: null,
      exp_month: number, // 1
      exp_year: number, // 2019
      funding: string, // "credit"
      last4: string, // "4242"
      metadata: {
      ...
      },
      name: string, // "Bayou Bill"
      tokenization_method: null
    }
    client_ip: string, // "5.5.5.123"
    created: number, // 1540398618
    email: string, // "me@example.com"
    livemode: boolean, // false
    type: "card"
    used: boolean, // false
  }
  type Addresses = {
    billing_name: string, // "Bayou B Bill"
    billing_address_line1: string, // "1234 Main St"
    billing_address_city: string, // "Anywhere"
    billing_address_state: string, // "LA"
    billing_address_zip: string, // "70000"
    billing_address_country: string, // "United States"
    billing_address_country_code: string, // "US"
    shipping_name: string, // "Bayou S Bill"
    shipping_address_line1: string, // "1234 Main St"
    shipping_address_city: string, // "Anywhere"
    shipping_address_state: string, // "LA"
    shipping_address_zip: string, // "70000"
    shipping_address_country: string, // "United States"
    shipping_address_country_code: string, // "US"
  }
  */
  handleToken = (token, addresses) => {
    console.log('App#handleToken');
    console.log(token);
    console.log(addresses);
    const { product } = this.state;

    const body = new FormData();
    // Send information to determine how to charge customer:
    body.append('product', product);
    body.append('quantity', 1);

    // Send standard Stripe information:
    body.append('stripeEmail', token.email);
    body.append('stripeToken', token.id);
    body.append('stripeTokenType', token.type);

    body.append('stripeBillingName', addresses.billing_name || '');
    body.append(
      'stripeBillingAddressLine1',
      addresses.billing_address_line1 || ''
    );
    body.append('stripeBillingAddressZip', addresses.billing_address_zip || '');
    body.append(
      'stripeBillingAddressState',
      addresses.billing_address_state || ''
    );
    body.append(
      'stripeBillingAddressCity',
      addresses.billing_address_city || ''
    );
    body.append(
      'stripeBillingAddressCountry',
      addresses.billing_address_country || ''
    );
    body.append(
      'stripeBillingAddressCountryCode',
      addresses.billing_address_country_code || ''
    );

    body.append('stripeShippingName', addresses.shipping_name || '');
    body.append(
      'stripeShippingAddressLine1',
      addresses.shipping_address_line1 || ''
    );
    body.append(
      'stripeShippingAddressZip',
      addresses.shipping_address_zip || ''
    );
    body.append(
      'stripeShippingAddressState',
      addresses.shipping_address_state || ''
    );
    body.append(
      'stripeShippingAddressCity',
      addresses.shipping_address_city || ''
    );
    body.append(
      'stripeShippingAddressCountry',
      addresses.shipping_address_country || ''
    );
    body.append(
      'stripeShippingAddressCountryCode',
      addresses.shipping_address_country_code || ''
    );

    fetch(checkoutUrl, {
      method: 'POST',
      body,
      mode: 'cors'
    })
      .then(res => {
        console.log('response received');
        console.dir(res);
        return res.json();
      })
      .then(result => {
        console.log('result');
        console.log(result);
      })
      .catch(error => {
        console.log('error');
        console.error(
          error,
          'You may need to refresh the server sandbox. It hibernates due to inactivity.'
        );
      });
  };

  render() {
    const { product, show } = this.state;
    let amount, description, label;
    if (product === 'banana') {
      amount = 500;
      description = 'Buy 1 Piece of Artwork';
      label = 'Buy 1 Piece of Artwork';
    } else {
      amount = 900;
      description = 'Buy 2 Pieces of Artwork';
      label = 'Buy 2 Pieces of Artwork';
    }
    return (
      <div className='App'>
        {stripePublicTestKey === 'pk_test_publishable_key' ? (
          <p>Configure your Stripe test mode publishable key.</p>
        ) : (
          <React.Fragment>
            <h1>
              <span aria-label='Gallery logo' role='img'>
                🎨
              </span>
              Gallery Checkout
            </h1>
            <div className='App__body'>
              {show && (
                <>
                  <form>
                    <label>
                      Buy the banana, err.. Art.
                      <input
                        type='radio'
                        name='product'
                        value='banana'
                        checked={product === 'banana'}
                        onChange={this.handleProductChange}
                      />
                    </label>
                    <br />
                    <label>
                      Buy the Elixir of Life
                      <input
                        type='radio'
                        name='product'
                        value='coke-zero'
                        checked={product === 'coke-zero'}
                        onChange={this.handleProductChange}
                      />
                    </label>
                  </form>
                  <StripeCheckout
                    allowRememberMe={false}
                    amount={amount}
                    billingAddress
                    closed={this.handleClose}
                    description={description}
                    image=''
                    label='Pay with 💳'
                    locale='auto'
                    name='G.A.W.D. Gallery'
                    opened={this.handleOpen}
                    panelLabel='Rent for {{amount}}'
                    // shippingAddress
                    stripeKey={stripePublicTestKey}
                    token={this.handleToken}
                    zipCode
                  />
                </>
              )}
            </div>
            <footer className='App__foot'>
              {/*
                This button allows the StripeCheckout component to be mounted and unmounted to
                confirm that it behaves as expected.
                */}
              <button className='btn btn-primary' onClick={this.toggleShow}>
                {show ? 'Unmount Form' : 'Mount Form'}
              </button>
            </footer>
          </React.Fragment>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
