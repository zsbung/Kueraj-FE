import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/header/HeaderAdmin";
import Auth from "../../utils/Auth";
import SideBar from "./SideBar";

export default function LayoutAdmin() {
  return (
    <div className="flex  ">
      <div className="w-[21%]  border ">
        <SideBar />
      </div>
      <div className=" w-[79%] ">
        <HeaderAdmin />
        <div className=" px-5  pt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
