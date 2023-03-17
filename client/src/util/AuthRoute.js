import React, { useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
