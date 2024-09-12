import { React, useEffect, useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignInElements = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  // const [state, functionToUpdateState] = useState("initializeState");
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  // update the form state when the user input changes
  // e is the event obj that is passed to the function whenever an event occurs
  const handleChange = (e) => {
    const { name, value } = e.target; // destructure name and value. e.target refers to the element that triggered the event. name, values are the properties of the target element. name is the name of the input field, and value is the current value entered in that input field
    setFormData({ ...formData, [name]: value }); // state updater function from the useState hook that updates formData state. ...formData crates a shallow copy of current formData state, ensuring you don't mutate the existing state directly
    // [name]: value dynamically updates the key in the formData object that matches the name of the input field
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };

  // if the user is logged in, he cannot access the sign in button. if he isn't logged in, he can access the button.
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  // useEffect with an empty dependencies array ([]) will run only once when the component mounts
  // checks if there are no errors and if the form has been submitted.
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formData); // prints the form data if there are no errors
      collectData(); // call collectData after successful validation
    }
  }, [formErrors]); // formErrors is a dependencies array. meaning the useEffect will run whenever formErrors changes

  // validates input data, and if there are no valdiation errors, it prints the captured data to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0) {
      collectData(); // call collectData() if there are no validation errors
    }
  };

  // below is an aynschronous function in JS that is used to collect user data and send
  // it to the server using fetch API. it sends a GET request to the endpoint to create
  // handle a sign-up action.
  // fetch is a built in js function used to make HTTP requests
  // below functio is to send data from front-end to backend
  const collectData = async () => {
    try {
      console.warn(formData.email, formData.password);
      let result = await fetch("http://localhost:5000/signIn", {
        // change the endpoint based on the function
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }), // this is an object
        headers: {
          // contains meta data about the request.
          "Content-Type": "application/json", // informs the server that the request body is in JSON format.
        },
      });
      if (!result.ok) {
        throw new Error(`HTTP Error! status ${result.status}`);
      } else {
        console.log("no errors. logged successfully");
      }

      //processes the response
      result = await result.json(); // waits for the servers response and parses the response body as JSON. this line cinverts the reponse to a JS object
      if (result.error) {
        // handle validation errors and display them to the user
        setFormErrors({ ...formErrors, password: result.error });
        setLoginError(result.error); // set error msg
      } else {
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result)); // stores the data in the local storage, with user as key
        navigate("/home"); // navigate back to home on successfuly validation
        // handle successful login here.
      }
    } catch (error) {
      console.error("An error has occured during fetch operation");
      setLoginError("Failed to login. Try again.");
    }
  };

  // useLocation() hook is used to get the location state passed from the privateComponent
  const location = useLocation();

  // this code retrieves the from pathname where the user was redirected from
  const from = location.state?.from?.pathname || "/"; // optional chaining to safely access deeply nested properties

  return (
    <>
      <Container>
        <FormWrap className="mt-10">
          {/* <Icon>
            <Link to = "/">
              <img alt="logo" className="w-16 h-auto" src={logo} />
            </Link>
          </Icon> */}
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              {from !== "/" && (
                <p style={{ color: "red", marginBottom: "10px" }}>
                  Please login to access {from.replace("/", "")}.
                </p>
              )}
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                id="email"
                required
              />
              {formErrors.email && (
                <span style={{ color: "red" }}>{formErrors.email}</span>
              )}

              <FormLabel className="mt-2" htmlFor="for">
                Password
              </FormLabel>
              <FormInput
                value={formData.password}
                name="password"
                onChange={handleChange}
                type="password"
                id="password"
                required
              />
              {formErrors.password && (
                <span style={{ color: "red" }}>{formErrors.password}</span>
              )}
              <FormButton className="mt-2" type="submit">
                Continue
              </FormButton>
              <Text className="cursor-pointer">Forgot Password?</Text>
              <Link className="text-center mt-3" to="../CreateAccount">
                <Text>New User? Create Account!</Text>
              </Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignInElements;
