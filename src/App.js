import { Fragment } from "react";
import React from "react";
import Header from "./Components/Layout/HeaderComponent/Header";
import MainComponent from "./Components/UI/MainComponent/Main";
import { Route, Routes, Navigate } from "react-router-dom";
import Shop from "./Components/UI/ShopComponent/Shop";
import SignInSignUp from "./Components/UI/sign-in-sign-up/sign-in-sign-up";
import CheckoutPage from "./Components/Layout/Checkout/Checkout";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./Redux/user/user.actions";
import { selectCurrentUser } from "./Redux/user/user.selector";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
class App extends React.Component {
  subscriber = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.subscriber = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.subscriber();
  }

  render() {
    return (
      <Fragment>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<MainComponent />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route exact path="/checkout" element={<CheckoutPage />}></Route>
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInSignUp />
            }
          ></Route>
        </Routes>
      </Fragment>
    );
  }
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProp, mapDispatchToProps)(App);
