import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ELearning from "./pages/ELearning";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import ContactUs from "./pages/ContactUs";
import { SignIn } from "./pages/SignIn";
import Enquire from "./pages/Enquire";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Home",
    element: <Home />,
  },

  {
    path: "/About",
    element: <About />,
  },

  {
    path: "/Courses",
    element: <Courses />,
  },

  {
    path: "/ELearning",
    element: <ELearning />,
  },

  {
    path: "/Gallery",
    element: <Gallery />,
  },

  {
    path: "/Videos",
    element: <Videos />,
  },

  {
    path: "/ContactUs",
    element: <ContactUs />,
  },

  {
    path: "/SignIn",
    element: <SignIn />,
  },

  {
    path: "/Enquire",
    element: <Enquire />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
