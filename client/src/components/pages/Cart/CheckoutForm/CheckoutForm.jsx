import React, { useContext, useState } from "react";
import { StateContext } from "../../../../context";
import Checkout from "react-stripe-checkout";
import axios from "axios";

const CheckoutForm = () => {
  const [{ cart }] = useContext(StateContext);
  const [value, dispatch] = useContext(StateContext);
  const totalPrice = cart.reduce((a, { price }) => a + price, 0);
  const onClose = () => {
    console.log("hey there");
    let idArray = [];
    cart.map(item => idArray.push(item.artwork_id));
    console.log("my array", idArray);
    axios.post("http://admin.insae.org/api/artworks/sold", { ids: idArray });
    dispatch({
      type: "clearCart"
    });
  };
  return (
    <div className="checkoutForm">
      <Checkout
        label="Checkout"
        name="Checkout"
        description="Complete your purchase"
        panelLabel="Submit Payment"
        amount={totalPrice * 100}
        currency="USD"
        shippingAddress
        billingAddress
        stripeKey="pk_test_4v8zi9Y35PCIfLBnAbUZUKcc00BdZcXFx5"
        token={onClose}
      />
    </div>
  );
};

export default CheckoutForm;
