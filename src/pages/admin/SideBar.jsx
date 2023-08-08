import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { GrSidebar } from "react-icons/gr";
import {
  AiFillAppstore,
  AiFillCreditCard,
  AiFillLayout,
  AiFillProfile,
  AiFillShopping,
} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { BsFillLayersFill } from "react-icons/bs";
export default function SideBar() {
  const { pathname } = useLocation();
  const sidebar = [
    {
      nama: "Dashboard",
      path: "/admin",
      icon: <AiFillLayout />,
    },
    {
      nama: "Kategori",
      path: "kategori",
      icon: <AiFillProfile />,
    },
    {
      nama: "Produk",
      path: "produk",
      icon: <BsFillLayersFill />,
    },
    {
      nama: "Admin",
      path: "/admin",
      icon: <FaUsers />,
    },

    {
      nama: "Penjualan",
      path: "penjualan",
      icon: <AiFillShopping />,
    },
  ];
  return (
    <div className="bg-[#F3F5F7] h-screen  sticky top-0  ">
      <div className=" py-2 mb-5 h-16 items-center flex justify-center w-full ">
        <p className="bg-gradient-to-r tracking-wider text-2xl from-black to-primary bg-clip-text text-transparent font-bold text-center">
          BungaBusana
        </p>
      </div>
      <div className="flex flex-col gap-y-4 px-5 border-r  h-screen ">
        <div>
          <ul className="flex flex-col gap-y-2">
            {sidebar.map((side, index) => (
              <Link
                key={index}
                to={side.path}
                className={`${
                  pathname.split("/").pop() == side.path
                    ? "bg-primary text-white "
                    : "font-bold"
                }w-full white text-md  font-semibold hover:bg-primary hover:text-white capitalize p-2 rounded-lg text-black  transition-all duration-100 ease-in flex items-center gap-x-2`}
              >
                <span className="text-xl">{side.icon}</span>
                {side.nama}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
