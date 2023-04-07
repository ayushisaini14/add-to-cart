import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { useNavigate } from "react-router-dom";

import CustomButton from "../../UI/customButton/custom-button";

import "./CartDropdown.scss";

import CartItem from "../cartItem/cartitem";

import { selectCartItems } from "../../../Redux/cart/cart.selector";

import { setCartAction } from "../../../Redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="emptymsg">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(setCartAction());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
