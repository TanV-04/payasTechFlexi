import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  const location = useLocation();

  // if there is data in auth:

  return auth ? (
    <Outlet />
  ) : (

    // this component uses navigate to redirect to the /signIn route while passing the from state
    <Navigate to="/signIn" state={{ from: location }} />
  );
};

export default PrivateComponent;

// react outlet is a component provided by react router that serves as a placeholder for child routes within a parent route.
// allows for the nesting of routes to create complex navigation structures in applications
