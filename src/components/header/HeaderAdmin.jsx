import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useLocation, useParams } from "react-router-dom";

export default function HeaderAdmin() {
  const { pathname } = useLocation();
  return (
    <>
      <header className="flex h-16 px-5 bg-[#F3F5F7] font-bold items-center w-full capitalize justify-between">
        {pathname.split("/").pop()}
        <div className=" transisi gap-x-1  text-md flex items-center  hover:text-primary cursor-pointer">
          <RxAvatar className="w-6 h-6 rounded-full " />
          Account
        </div>
      </header>
    </>
  );
}
