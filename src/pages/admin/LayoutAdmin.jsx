import React from "react";
import { RxAvatar } from "react-icons/rx";
import SideBar from "./SideBar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header/HeaderAdmin";

export default function LayoutAdmin() {
  return (
    <div className="flex  ">
      <div className="w-[22%]  border h-screen sticky top-0 bg-base ">
        <SideBar />
      </div>
      <div className=" w-[78%] ">
        <HeaderAdmin />
        <div className="min-h-screen mx-5 mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
