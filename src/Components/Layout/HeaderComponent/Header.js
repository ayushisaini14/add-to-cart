import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import { auth } from "../../../firebase/firebase.util";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = ({ currentUser }) => {
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
      </header>
    </Fragment>
  );
};

export default Header;
