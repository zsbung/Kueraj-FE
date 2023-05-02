import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { GrSidebar } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function SideBar() {
  const sidebar = [
    {
      nama: "Dashboard",
      path: "dashboard",
      icon: <RxDashboard />,
    },
    {
      nama: "Kategori",
      path: "kategori",
      icon: <GrSidebar />,
    },
    {
      nama: "Produk",
      path: "produk",
      icon: <GrSidebar />,
    },
    {
      nama: "Admin",
      path: "/admin",
      icon: <FaUserFriends />,
    },
    {
      nama: "Transaksi",
      path: "/admin",
      icon: <BiCategoryAlt />,
    },
  ];
  return (
    <div className="flex flex-col gap-y-4 px-5 bg-white border  h-screen ">
      <div className="text-lg tracking-wider">Logo</div>
      <span className="w-full border h-[1px]"></span>
      <div>
        <ul className="flex flex-col gap-y-2">
          {sidebar.map((side, index) => (
            <Link
              to={side.path}
              className="w-full text-md font-semibold hover:bg-primary hover:text-white capitalize p-2 rounded-lg text-black  transition-all duration-100 ease-in flex items-center gap-x-2"
              key={index}
            >
              {side.icon}
              {side.nama}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
