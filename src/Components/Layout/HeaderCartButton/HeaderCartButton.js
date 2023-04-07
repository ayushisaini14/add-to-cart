import { Fragment } from "react";
import CartIcon from "../../Cart/CartIcon";

import "./HeaderCartButton.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../../Redux/cart/cart.selector";

import { setCartAction } from "../../../Redux/cart/cart.actions";

const HeaderCartButton = ({ setCartAction, itemCount }) => {
  return (
    <Fragment>
      <button className="button" onClick={setCartAction}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{itemCount}</span>
      </button>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  setCartAction: () => dispatch(setCartAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCartButton);
