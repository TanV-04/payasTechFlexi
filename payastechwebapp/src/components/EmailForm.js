import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import '../App.css';

const EmailForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_q707qns";
    const templateId = "template_hxi2skn";
    const publicKey = "YU1cDrC3r9VPzI4Xm";

    // use state names
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web Wizard",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent successfully!", response);
        setName(""); // reset state variables
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error sending email: ", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <h1> send an email below</h1>
      <input
        type="text"
        placeholder="your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send email</button>
    </form>
  );
};

export default EmailForm;
