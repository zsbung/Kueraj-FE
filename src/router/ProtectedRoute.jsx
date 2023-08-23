import React from "react";
import Auth from "../utils/Auth";
import { Navigate } from "react-router-dom";
import LayoutAuth from "../Auth/LayoutAuth";

export default function ProtectedRoute() {
  if (Auth.isAuthorization()) {
    return <Navigate to={"/"} replace={true} />;
  }
  return <LayoutAuth />;
}
