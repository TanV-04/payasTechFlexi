import React, { useState } from "react";
import "../../App.css";
import { Button } from "../ButtonElement";
import {
  EnquiryContainer,
  EnquiryContent,
  EnquiryHeading,
  EnquiryH1,
  EnquiryP,
  EnquiryAdHolder,
  EnquiryAd1,
  EnquiryAd2,
  EnquiryAd3,
  EnquiryAd4,
  EnquiryForm,
  EnquiryFormH1,
  Input,
  Select,
  Textarea,
} from "./EnquiryElements";

const Enquiry = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    phone: "",
    email: "",
    option: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    phone: "",
    email: "",
    option: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMsg = "";

    if (name === "firstName") {
      const namePattern = /^[a-zA-Z\s-]+$/;
      if (!value) {
        errorMsg = "Name is required";
      } else if (!namePattern.test(value)) {
        errorMsg = "Invalid Name";
      }
    } else if (name === "phone") {
      const phonePattern = /^\d{10}$/;
      if (!value) {
        errorMsg = "Phone number is required";
      } else if (!phonePattern.test(value)) {
        errorMsg = "Invalid phone number";
      }
    } else if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMsg = "Email is required";
      } else if (!emailPattern.test(value)) {
        errorMsg = "Invalid email address";
      }
    } else if (name === "option") {
      if (!value) {
        errorMsg = "Option is required";
      }
    } else if (name === "query") {
      if (!value) {
        errorMsg = "Query is required";
      }
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {}; // Local object to hold errors during validation
  
    // Validate all fields on submit
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]); // Validates and sets errors in state
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        isValid = false; // Set isValid to false if any field is empty
      }
    });
  
    // Check if there are any errors in the state
    Object.keys(errors).forEach((key) => {
      if (errors[key]) {
        isValid = false;
        newErrors[key] = errors[key]; // Capture any existing errors from state
      }
    });
  
    setErrors(newErrors); // Update state with all errors found
  
    if (isValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Validation Errors: ", newErrors);
    }
  };
  

  return (
    <>
      <EnquiryContainer>
        <EnquiryContent>
          <EnquiryHeading>
            <EnquiryH1 className="poppins">IT TRAINING</EnquiryH1>
            <EnquiryP className="dmSans">
              Trainers are Experienced Corporate Working Professionals
            </EnquiryP>
          </EnquiryHeading>

          <EnquiryAdHolder className="dmSans">
            <EnquiryAd1>100% Placements Assistance</EnquiryAd1>
            <EnquiryAd2>Real Time Projects</EnquiryAd2>
            <EnquiryAd3>Internship</EnquiryAd3>
            <EnquiryAd4>Live Coding</EnquiryAd4>
          </EnquiryAdHolder>

          <EnquiryForm className="dmSans">
            <EnquiryFormH1 className="poppins">Enquire Now</EnquiryFormH1>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
              style={{ borderColor: errors.firstName ? "red" : "" }}
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone"
              required
              style={{ borderColor: errors.phone ? "red" : "" }}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone}</span>
            )}
            <Input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              placeholder="Email Address"
              required
              style={{ borderColor: errors.email ? "red" : "" }}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
            <Select
              name="option"
              onChange={handleChange}
              value={formData.option}
              required
            >
              {/* <option value="">Select an Option</option> */}
              <option value="PayasTech">Payas Tech</option>
            </Select>
            {errors.option && (
              <span style={{ color: "red" }}>{errors.option}</span>
            )}
            <Textarea
              name="query"
              onChange={handleChange}
              value={formData.query}
              placeholder="Your Query"
              required
              style={{ borderColor: errors.query ? "red" : "" }}
            />
            {errors.query && (
              <span style={{ color: "red" }}>{errors.query}</span>
            )}
            <Button onClick={handleSubmit} type="submit" id="firstName">
              Send Message
            </Button>
          </EnquiryForm>
        </EnquiryContent>
      </EnquiryContainer>
    </>
  );
};

export default Enquiry;
