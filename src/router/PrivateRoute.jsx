import React from "react";
import { Navigate } from "react-router-dom";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Auth from "../utils/Auth";

export default function PrivateRoute() {
  if (
    (Auth.isAuthorization() && Auth.getRoleAs() == 1) ||
    Auth.getRoleAs() == 3
  ) {
    return <LayoutAdmin />;
  }
  return <Navigate to={"/auth"} replace={true} />;
}
