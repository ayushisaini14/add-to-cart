import React from "react";

import "./signIn.scss";

import FormInput from "../form-input/form-input";
import CustomButton from "../customButton/custom-button";

import { signInwithGoogle } from "../../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          ></FormInput>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInwithGoogle}>
            Sign in with google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
