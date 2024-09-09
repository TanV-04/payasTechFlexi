import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user"); // check if the user is authenticated by looking for them in the localStorage
  const location = useLocation(); // get the current location using useLocation/current location object (where the user currently is in the App). also represents the current url in the browser

  // if there is data in auth:

  return auth ? ( // if the user is authenticated
    <Outlet /> // render the protected routes or child components
  ) : (
    // if the user is not authenticated

    // this component uses navigate to redirect to the /signIn route while passing the from state
    <Navigate to="/signIn" state={{ from: location }} /> // the state prop is used to pass the current location as state to the /signIn route, so that when the user has logged in, they're redirected to the page they were trying to access before logging in. bascially remember where the user was before redirecting
  );
};

export default PrivateComponent;

// react outlet is a component provided by react router that serves as a placeholder for child routes within a parent route.
// allows for the nesting of routes to create complex navigation structures in applications
