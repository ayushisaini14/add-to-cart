import React from "react";

import FormInput from "../form-input/form-input";
import "./signup.scss";
import CustomButton from "../customButton/custom-button";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      confirmPass: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", pass: "", confirmPass: "" });
  };

  render() {
    return (
      <div className="signUp">
        <h2>I do not have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            label="Display Name"
            handleChange={this.handleChange}
            value={this.state.name}
            required
          ></FormInput>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          ></FormInput>
          <FormInput
            name="pass"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.pass}
            required
          ></FormInput>
          <FormInput
            name="confirmPass"
            type="password"
            label="Confirm Password"
            handleChange={this.handleChange}
            value={this.state.confirmPass}
            required
          ></FormInput>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
