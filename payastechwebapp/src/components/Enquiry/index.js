import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
  const initialValues = {
    firstName: "",
    phone: "",
    email: "",
    option: "",
    query: "",
  };

  // form data and validation states
  const [formData, setFormData] = React.useState(initialValues); // pass the initial values of the state
  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false); // flag for submit

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // updates the state formData as the user types into each input field.
  // uses the event object 'e' to dynamically update the field value
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  // checks the function formData for errors and returns an errors object containing validation messages for fields that fail their checks
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const mobileRegex = /^\d{10}$/;

    // checks if the firstName field is empty
    if (!values.firstName) {
      errors.firstName = "Name is required!";
    }
    if (!values.phone) {
      // check if phone field is empty
      errors.phone = "Phone is required!";
    } else if (!mobileRegex.test(values.phone)) {
      // tests against a regex pattern
      errors.phone = "This is not a valid phone number.";
    }
    if (!values.email) {
      // check if email field is empty
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email.";
    }
    if (!values.option) {
      // check if the option is selected in the drop down
      errors.option = "Option is required!";
    }
    if (!values.query) {
      // checks if query field is empty
      errors.query = "Query is required!";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  // use useEffect when all the five fields are filled
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    setFormErrors(validate(formData)); // calls the validate function to check for errors and updates the formErrors state.
    setIsSubmit(true);

    // for sending email to admin regarding successful query submission (to me)
    // just change my email to admin email

    const { firstName, email, query } = formData;

    const serviceId = "service_q707qns";
    const templateId = "template_hxi2skn";
    const publicKey = "YU1cDrC3r9VPzI4Xm";

    const templateParams = {
      from_name: firstName,
      from_email: email,
      to_name: "Admin",
      message: query,
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

  // const [formData, setFormData] = React.useState({
  //   firstName: "",
  //   phone: "",
  //   email: "",
  //   option: "",
  //   query: "",
  // });

  // const [errors, setErrors] = useState({
  //   firstName: "",
  //   phone: "",
  //   email: "",
  //   option: "",
  //   query: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   validateField(name, value);
  // };

  // const validateField = (name, value) => {
  //   let errorMsg = "";

  //   if (name === "firstName") {
  //     const namePattern = /^[a-zA-Z\s-]+$/;
  //     if (!value) {
  //       errorMsg = "Name is required";
  //     } else if (!namePattern.test(value)) {
  //       errorMsg = "Invalid Name";
  //     }
  //   } else if (name === "phone") {
  //     const phonePattern = /^\d{10}$/;
  //     if (!value) {
  //       errorMsg = "Phone number is required";
  //     } else if (!phonePattern.test(value)) {
  //       errorMsg = "Invalid phone number";
  //     }
  //   } else if (name === "email") {
  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!value) {
  //       errorMsg = "Email is required";
  //     } else if (!emailPattern.test(value)) {
  //       errorMsg = "Invalid email address";
  //     }
  //   } else if (name === "option") {
  //     if (!value) {
  //       errorMsg = "Option is required";
  //     }
  //   } else if (name === "query") {
  //     if (!value) {
  //       errorMsg = "Query is required";
  //     }
  //   }

  //   setErrors({ ...errors, [name]: errorMsg });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let isValid = true;
  //   const newErrors = {}; // Local object to hold errors during validation

  //   // Validate all fields on submit
  //   Object.keys(formData).forEach((key) => {
  //     validateField(key, formData[key]); // Validates and sets errors in state
  //     if (!formData[key]) {
  //       newErrors[key] = "This field is required";
  //       isValid = false; // Set isValid to false if any field is empty
  //     }
  //   });

  // Check if there are any errors in the state
  // Object.keys(errors).forEach((key) => {
  //   if (errors[key]) {
  //     isValid = false;
  //     newErrors[key] = errors[key]; // Capture any existing errors from state
  //   }
  // });

  //   setErrors(newErrors); // Update state with all errors found

  //   if (isValid) {
  //     alert("Form submitted successfully!");
  //   } else {
  //     alert("Validation Errors: ", newErrors);
  //   }
  // };

  return (
    <>
      <EnquiryContainer>
        {/* <pre>{JSON.stringify(formData, undefined, 2)}</pre> */}
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="uiMessage">Message sent successfully!</div>
        ) : (
          <pre>{JSON.stringify(formData, undefined, 2)}</pre>
        )} */}

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
              // required
              // style={{ borderColor: errors.firstName ? "red" : "" }}
            />

            {/* for each input field in the form, an error message is displayed if it exists in the formErrors object */}
            {formErrors.firstName && (
              <span style={{ color: "red" }}>{formErrors.firstName}</span>
            )}
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone"
              // required
              // style={{ borderColor: errors.phone ? "red" : "" }}
            />
            {formErrors.phone && (
              <span style={{ color: "red" }}>{formErrors.phone}</span>
            )}
            <Input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              placeholder="Email Address"
              // required
              // style={{ borderColor: errors.email ? "red" : "" }}
            />
            {formErrors.email && (
              <span style={{ color: "red" }}>{formErrors.email}</span>
            )}
            <Select
              name="option"
              onChange={handleChange}
              value={formData.option}
              required
            >
              <option value="">Select an Option</option>
              <option value="PayasTech">Payas Tech</option>
            </Select>
            {formErrors.option && (
              <span style={{ color: "red" }}>{formErrors.option}</span>
            )}
            <Textarea
              name="query"
              onChange={handleChange}
              value={formData.query}
              placeholder="Your Query"
              // required
              // style={{ borderColor: errors.query ? "red" : "" }}
            />
            {formErrors.query && (
              <span style={{ color: "red" }}>{formErrors.query}</span>
            )}
            <Button onClick={handleSubmit} type="submit" id="firstName">
              Send Message
            </Button>
          </EnquiryForm>

          {/* display success message */}
          {/* this is a conditional render block */}
          {/* it checks if there are no form errors by determining the length of 'formErrors' object's keys is 0 */}
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 transition-transform transform translate-y-[-100%] animate-slide-down">
              Query sent successfully! Please wait while we get back to you!
            </div>
          )}
        </EnquiryContent>
      </EnquiryContainer>
    </>
  );
};

export default Enquiry;
