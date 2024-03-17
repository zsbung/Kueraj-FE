import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../utils/Auth";
import Kasir from "../pages/kasir/Kasir";
import LayoutKasir from "../pages/LayoutKasir";

export default function KasirRoute() {
  if (Auth.getRoleAs() == 3) {
    return <LayoutKasir />;
  }
  return <Navigate to={"/auth"} replace={true} />;
}
