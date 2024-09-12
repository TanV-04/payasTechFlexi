export default function validateForm({ name, email, password, confirmPass }) {
  // if (!name.trim()) {
  //   return "username required";
  // }

  // const regex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

  // if (!email) {
  //   return "email is required";
  // } else if (regex.test(email.toLocalLowerCase())) {
  //   return "Email address is invalid";
  // }

  // if (!password) {
  //   return "password is required";
  // } else if (password.length > 6) {
  //   return "password needs to be 6 characters long";
  // }

  // if (!confirmPass) {
  //   return "enter confirm pass";
  // } else if (password !== confirmPass) {
  //   return "passwords do not match";
  // }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

  if (!name.trim()) {
    return "name is required";
  }
  if (!email) {
    return "Email is required";
  } else if (!regex.test(email)) {
    return "invalid email";
  }

  if (!password) {
    return "password is required";
  } else if (password.length < 6) {
    return "password needs to be at least 6 characters long";
  }
  if (!confirmPass) {
    return "Enter confirm password";
  } else if (password !== confirmPass) {
    return "passwords do not match";
  }
}
