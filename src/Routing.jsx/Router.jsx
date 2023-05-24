import React from "react";
import Home from "../Pages/Home";
import ServicePage from "../Pages/ServicePage";
import CoursePage from "../Pages/CoursePage";
import Portfolio from "../Pages/Portfolio";
import ContactPage from "../Pages/ContactPage";
import About from "../Pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/service", element: <ServicePage /> },
  { path: "/course", element: <CoursePage /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/about", element: <About /> },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
