import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../../Redux/cart/cart.selector";

import "./Checkout.scss";

import CheckoutItem from "../CheckoutItem/CheckoutItem";

const CheckoutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Discription</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))
    ) : (
      <span className="emptymsg">Your cart is empty</span>
    )}
    <div className="total">
      <span>Total: ${totalPrice}</span>
    </div>
  </div>
);

const mapStateToProp = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});

export default connect(mapStateToProp)(CheckoutPage);
