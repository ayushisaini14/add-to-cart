import React from "react";

import FormInput from "../form-input/form-input";
import "./signup.scss";
import CustomButton from "../customButton/custom-button";

import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.util";

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

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, pass, confirmPass } = this.state;

    if (pass !== confirmPass) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, pass);

      await createUserProfileDocument(user, { displayName: name });

      this.setState({ name: "", email: "", pass: "", confirmPass: "" });
    } catch (error) {
      console.log("error occured", error.message);
    }
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
