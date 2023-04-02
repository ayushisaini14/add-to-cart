import { Fragment } from "react";
import { Link } from "react-router-dom";
// import mealsImage from '../../Assets/shopping.jpg'
import "./Header.scss";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
const Header = (props) => {
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
          <Link to="/signin">
            <span className="subtitle">Sign In</span>
          </Link>
          <HeaderCartButton />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
