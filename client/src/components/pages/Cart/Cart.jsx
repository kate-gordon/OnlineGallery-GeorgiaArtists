import React, { useContext } from 'react';
import { StateContext } from '../../../context';

import './cart.css';

const Cart = () => {
  const [value] = useContext(StateContext);
  console.log(value);
  const cartArray = value.cart || [];
  const cartLi =
    cartArray.map((item, key) => <li key={key}>{item.title}</li>) || null;

  console.log(value);
  return (
    <>
      <h1>Your cart</h1>
      <ul>{cartLi}</ul>
    </>
  );
};

export default Cart;
