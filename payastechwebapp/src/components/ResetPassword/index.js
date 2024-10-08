import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ResetPasswordContainer,
  ResetPasswordHeading,
  Input,
  Button,
} from "./ResetPasswordElements";

const ResetPassword = () => {
  // extracts the password reset token from the URL using useParams()
  const { token } = useParams(); // Using useParams (a hook that allows the component to access URL parameters) to get the token from the URL

  // states
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // this function is called whenever the input fields change
  // updates the corresponding state variables based on the input field that triggered the change
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const navigate = useNavigate();

  // form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.");
      setMessage("");
      return;
    }

    // the function sends a POST request to the server to reset the password
    // using fetch api
    // the url includes the reset token from the url params
    try {
      const response = await fetch(
        `http://localhost:5000/ResetPassword/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword }),
        }
      );

      // const text = await response.text();
      // console.log(text);

      // wait for the server's response and convert it to JSON
      const data = await response.json();

      // based on the response received from the backend, set the respective errors and responses.
      if (response.ok) {
        setMessage(data.message);
        setError("");
        navigate("/SignIn"); // route back to the sign in page
      } else {
        setError(data.error);
        setMessage("");
      }
    } catch (error) {
      console.error("Error: ", error);
      setError("An error occurred. Please try again");
      setMessage("");
    }
  };

  return (
    <>
      <ResetPasswordContainer>
        <ResetPasswordHeading>Reset Password</ResetPasswordHeading>
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            placeholder="New password"
            required
          />
          <Input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          <Button type="submit">Reset Password</Button>
        </form>

        {/*conditional rendering*/}
        <div className="mt-4">
          {message && <p>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </ResetPasswordContainer>
    </>
  );
};

export default ResetPassword;
