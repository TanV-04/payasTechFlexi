import React, { Component } from "react";
import {
  ForgotPasswordContainer,
  ForgotPasswordTitle,
  Button,
  Input,
} from "./ForgotPasswordElements";
// import jwt from "jwt-simple";
// import { Buffer } from 'buffer';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    try {
      const response = await fetch("http://localhost:5000/ForgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        this.setState({ message: data.message, error: "" });
      } else {
        this.setState({ error: data.error, message: "" });
      }
    } catch (error) {
      console.error("Error: ", error);
      this.setState({
        error: "An error has occured. Please try again.",
        message: "",
      });
    }
  };

  render() {
    const { email, message, error } = this.state;
    const jwt = require("jwt-simple"); // jwt simple module
    const payload = { userId: 1 }; // create a payload object. this will be encoded inside the token
    const secret = "fe1a1915a379f3be5394b64d14794932"; // random string
    const token = jwt.encode(payload, secret); // create token by calling encode() function from jwt simple module. the result of this function is a url-friendly token, which contains the encoded header, payload and signature
    console.log(token);
    const decode = jwt.decode(token, secret);
    console.log(decode);

    // Use parentheses to wrap the returned JSX
    return (
      <ForgotPasswordContainer>
        <ForgotPasswordTitle>Enter your email address</ForgotPasswordTitle>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email address"
            required
          />
          <Button>Reset Password</Button>
        </form>
        <div className="mt-4">
          {message && <p>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </ForgotPasswordContainer>
    );
  }
}

export default ForgotPassword;
