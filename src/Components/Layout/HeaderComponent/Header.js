import { Fragment } from "react";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./Header.scss";
import { connect } from "react-redux";

import { auth } from "../../../firebase/firebase.util";

import { selectCurrentUser } from "../../../Redux/user/user.selector";
import { selectCartHidden } from "../../../Redux/cart/cart.selector";

import CartDropdown from "../CartDropdown/CartDropdown";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = ({ currentUser, hidden }) => {
  return (
    <Fragment>
      <header className="header">
        <Link className="nameContainer" to="/">
          <h1>GRWM</h1>
        </Link>
        <div className="rightHeader">
          <Link to="/shop">
            <span className="subtitle">Shop</span>
          </Link>
          <Link to="/contact">
            <span className="subtitle">Contact</span>
          </Link>
          {currentUser ? (
            <div className="subtitle" onClick={() => auth.signOut()}>
              Sign out
            </div>
          ) : (
            <Link to="/signin">
              <span className="subtitle">Sign In</span>
            </Link>
          )}
          <HeaderCartButton />
        </div>
        {hidden ? null : <CartDropdown />}
      </header>
    </Fragment>
  );
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProp)(Header);
