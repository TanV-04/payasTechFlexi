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
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const SignInElements = () => {

  

  const initialValues = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

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
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" id="email" required />

              <FormLabel className="mt-2" htmlFor="for">
                Password
              </FormLabel>
              <FormInput type="password" id="password" required />

              <FormButton className="mt-2" type="submit">
                Continue
              </FormButton>
              <Text className="cursor-pointer">Forgot Password?</Text>
              <Text className="cursor-pointer">New User? Create Account!</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignInElements;
