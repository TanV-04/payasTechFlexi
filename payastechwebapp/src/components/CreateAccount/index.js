import { React, useState } from "react";
import "../../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./CreateAccountElements";
import { useNavigate } from "react-router-dom";
import { animate } from "framer-motion";
import validateForm from "./validateForm";

const CreateAccount = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formError, setFormErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [formD, setFormD] = useState(initialValues);
  const [loginError, setLoginError] = useState(null);
  const [messageVisible, setMessageVisible] = useState(false);

  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.password) {
      errors.password = "Enter a password";
    } else if (values.password.length < 6) {
      errors.password = "Password too short";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormD((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formD);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      collectData();
      setFormD(initialValues);
      // setSuccess("Account created successfully!");
      // alert("Account created successfully!");

      // Redirect after one second.
      // setTimeout(() => {
      //   navigate("/signIn");
      // }, 2000);
    }
  };

  const collectData = async () => {
    try {
      // console.warn(formD.name, formD.email, formD.password); // --> for testing purposes
      let result = await fetch("http://localhost:5000/signUp", {
        method: "POST",
        body: JSON.stringify({
          name: formD.name,
          email: formD.email,
          password: formD.password,
          confirmPassword: formD.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP Error! Status ${result.status}`);
      }

      result = await result.json();
      if (result.error) {
        setFormErrors({ ...formError, password: result.error });
        setLoginError(result.error);
      } else {
        setSuccess("Account created successfully!");
        setMessageVisible(true);
        setTimeout(() => {
          setMessageVisible(false);
          navigate("/home");
        }, 2000);
        // console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        // navigate("/home");
      }
    } catch (error) {
      console.log("An error has occurred", error);
      setLoginError("Failed to log in");
    }
  };

  // const messageVariants = {
  //   hidden: { y: 30, opacity: 0 },
  //   animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  // };

  const formData = [
    {
      label: "Name",
      name: "name",
      value: formD.name,
      onChange: handleChange,
      type: "text",
      error: formError.name,
    },
    {
      label: "Email",
      name: "email",
      value: formD.email,
      onChange: handleChange,
      type: "email",
      error: formError.email,
    },
    {
      label: "Password",
      name: "password",
      value: formD.password,
      onChange: handleChange,
      type: "password",
      error: formError.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      value: formD.confirmPassword,
      onChange: handleChange,
      type: "password",
      error: formError.confirmPassword,
    },
  ];

  return (
    <>
      <Navbar />
      <FormSection>
        <div>
          <FormRow>
            <FormColumn>
              <FormTitle>Sign Up</FormTitle>
              <FormWrapper onSubmit={handleSubmit}>
                {formData.map((el, index) => (
                  <FormInputRow key={index}>
                    <FormLabel>{el.label}</FormLabel>
                    <FormInput
                      type={el.type}
                      name={el.name}
                      value={el.value}
                      onChange={el.onChange}
                    />
                    {el.error && <FormMessage error>{el.error}</FormMessage>}
                  </FormInputRow>
                ))}
                <FormButton type="submit">Sign Up</FormButton>
              </FormWrapper>
              {/* {success && (
                <FormMessage animate="animate" variant={messageVariants}>
                  {success}
                </FormMessage>
              )} */}

              {/* {Object.keys(formError).length === 0 && success && (
                <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 transition-transform transform translate-y-[-100%] animate-slide-down">
                  Account Created Successfully
                </div>
              )} */}

              {/* {loginError && (
                <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 transition-transform transform translate-y-[-100%] animate-slide-down">
                  {loginError}
                </div>
              )} */}

              {messageVisible && (
                <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center p-4 transition-transform transform translate-y-[-100%] animate-slide-down">
                  {success}
                </div>
              )}
            </FormColumn>
          </FormRow>
        </div>
      </FormSection>
      <Footer />
    </>
  );
};

export default CreateAccount;
