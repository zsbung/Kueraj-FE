import React, { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../../mockup/mockup";
import FormNavbar from "./FormNavbar";
import Keranjang from "./Keranjang";
export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [form, setForm] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      {
        window.pageYOffset > 0 ? setScroll(true) : setScroll(false);
      }
    });
  });
  let navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        scroll ? " bg-white " : "shadow-sm bg-transparent"
      } fixed z-50  w-full transition-all duration-200 ease-out gap-x-5  px-[10px] lg:px-[70px] py-4 font-medium items-center tex-md  text-text flex `}
    >
      <div className="w-[10%] ">
        <button onClick={() => navigate("/")}>logo</button>
      </div>
      <div className="lg:flex hidden justify-between w-full">
        <ul className="flex  w-[40%] gap-x-7 items-center transisi  justify-start">
          {nav.map((m, index) => (
            <NavLink key={index} to={m.path}>
              <li className="cursor-pointer hover:text-primary translinear">
                {m.name}
              </li>
            </NavLink>
          ))}
        </ul>
        <div
          className={` w-[60%]  items-center gap-x-5  ease-in-out    flex justify-end relative`}
        >
          <FormNavbar
            form={form}
            setForm={setForm}
            search={search}
            setSearch={setSearch}
          />
          <NavLink to={`keranjang`}>
            <Keranjang />
          </NavLink>

          <div className=" transisi gap-x-1  text-md flex items-center  hover:text-primary cursor-pointer">
            <RxAvatar className="w-6 h-6 rounded-full " />
            Account
          </div>
        </div>
      </div>
    </div>
  );
}
