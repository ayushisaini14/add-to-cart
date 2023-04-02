import { Fragment } from "react";
import React from "react";
import Header from "./Components/Layout/HeaderComponent/Header";
import MainComponent from "./Components/UI/MainComponent/Main";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/UI/ShopComponent/Shop";
import SignInSignUp from "./Components/UI/sign-in-sign-up/sign-in-sign-up";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  subscriber = null;

  componentDidMount() {
    this.subscriber = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.subscriber();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}></Header>
        <Routes>
          <Route exact path="/" element={<MainComponent />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/signin" element={<SignInSignUp />}></Route>
        </Routes>
      </Fragment>
    );
  }
}

export default App;
