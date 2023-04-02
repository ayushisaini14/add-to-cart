import { Fragment } from "react";
import Header from "./Components/Layout/HeaderComponent/Header";
import MainComponent from "./Components/UI/MainComponent/Main";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/UI/ShopComponent/Shop";
import SignInSignUp from "./Components/UI/sign-in-sign-up/sign-in-sign-up";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<MainComponent />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/signin" element={<SignInSignUp />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
