import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footers/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Layout() {
  return (
    <div className=" font-poppins ">
      <Navbar />
      <div className="content bg-base text-text   ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
