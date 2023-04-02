import React from "react";

import "./sign-in-sign-up.scss";

import SignIn from "../signInComponent/signIn";
import SignUp from "../SignUpComponent/signup";

const SignInSignUp = () => {
  return (
    <div className="signinsignup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
