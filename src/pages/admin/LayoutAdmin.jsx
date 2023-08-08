import React from "react";
import { RxAvatar } from "react-icons/rx";
import SideBar from "./SideBar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/header/HeaderAdmin";

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
