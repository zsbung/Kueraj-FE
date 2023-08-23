import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

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
