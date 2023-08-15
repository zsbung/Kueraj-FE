import React, { useContext, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { nav } from "../../mockup/mockup";
import Auth from "../../utils/Auth";
import FormNavbar from "./FormNavbar";
import Keranjang from "./Keranjang";
import axiosInstance from "../../configs/AxiosInstance";
import { FormatRupiah } from "@arismun/format-rupiah";
export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [scroll, setScroll] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      {
        window.pageYOffset > 0 ? setScroll(true) : setScroll(false);
      }
    });
  });

  const { user, setUser } = useContext(MyContext);

  useEffect(() => {
    axiosInstance.get("me").then((res) => setUser(res.data));
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  return (
    <div
      className={`${
        scroll ? " bg-white/70 backdrop-blur-sm  " : " bg-transparent"
      } sticky top-0 z-50  w-full transition-all duration-200 ease-out gap-x-5  font-semibold px-[10px] lg:px-[70px] py-4  items-center tex-md  text-text flex `}
    >
      <div className="w-[10%] ">
        <button onClick={() => navigate("/")}>BB</button>
      </div>
      <div className="lg:flex hidden justify-between w-full">
        <ul className="flex  w-[40%] gap-x-7 items-center   justify-start">
          {nav.map((m, index) => (
            <NavLink
              key={index}
              to={m.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-primary"
                  : "cursor-pointer hover:text-primary translinear"
              }
            >
              {m.name}
            </NavLink>
          ))}
        </ul>
        <div
          className={` w-[60%]  items-center gap-x-5  ease-in-out    flex justify-end relative`}
        >
          <FormNavbar search={search} setSearch={setSearch} />
          {Auth.isAuthorization() && (
            <NavLink to={`keranjang`}>
              <Keranjang />
            </NavLink>
          )}

          <div className="group relative transisi gap-x-1  text-md flex items-center  hover:text-primary cursor-pointer">
            <RxAvatar className="w-6 h-6 rounded-full " />
            {Auth.isAuthorization() && (
              <>
                {user?.name?.split(" ")}
                <div className="absolute top-5 -right-5   mt-1  w-[12rem] flex flex-col   bg-base shadow-lg rounded-xl h-0 group-hover:h-28   overflow-hidden text-sm  z-[10] transition-all duration-500 ease-in-out ">
                  <Link
                    to={`/admin`}
                    className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to={`/riwayat`}
                    className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                  >
                    Riwayat
                  </Link>
                  <button
                    onClick={logOut}
                    className=" p-2 text-black text-left hover:text-primary  hover:bg-base1 hover:underline"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
            {!Auth.isAuthorization() && <Link to={"auth"}>Login</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
