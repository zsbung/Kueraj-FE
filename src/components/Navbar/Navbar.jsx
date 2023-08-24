import React, { useContext, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../configs/AxiosInstance";
import { MyContext } from "../../context/Context";
import { nav } from "../../mockup/mockup";
import Auth from "../../utils/Auth";
import FormNavbar from "./FormNavbar";
import Keranjang from "./Keranjang";
export default function Navbar() {
  const [search, setSearch] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(false);

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
    {
      setLoading(true);
      Auth.isAuthorization() &&
        axiosInstance.get("me").then((res) => {
          setUser(res.data);
          setLoading(false);
        });
    }
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    Auth.signOut(navigate);
  };
  return (
    <div
      className={`${
        scroll ? " bg-white/70 backdrop-blur-sm  " : " bg-transparent"
      } sticky top-0 z-[9999]  w-full transition-all duration-200 ease-out gap-x-5 h-20 font-semibold px-[10px] lg:px-[70px] py-3  items-center tex-md  text-text flex `}
    >
      <div className="w-[10%] ">
        <button onClick={() => navigate("/")}>BB</button>
      </div>
      <div className="flex  justify-end lg:justify-between w-full">
        <ul className="lg:flex  w-[40%] hidden gap-x-7 items-center   justify-start">
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
          className={` w-[60%]  items-center gap-x-5  ease-in-out     flex justify-end relative`}
        >
          {/* <FormNavbar search={search} setSearch={setSearch} /> */}
          {Auth.isAuthorization() && (
            <NavLink to={`keranjang`}>
              <Keranjang />
            </NavLink>
          )}
          <div className="group relative transisi gap-x-1   text-md flex items-center   hover:text-primary cursor-pointer">
            <RxAvatar className="w-6 h-6 rounded-full " />
            {/* {loading && <Skeleton style={`h-5 w-20`} />} */}
            {Auth.isAuthorization() && (
              <>
                {user?.name?.split(" ")}
                <div className="absolute top-5 -right-5   mt-1  w-[12rem] h-0 flex flex-col justify-center  group-hover:border  border-0  bg-base overflow-hidden   group-hover:h-24    shadow-lg rounded-xl     text-sm  z-[10] transition-all duration-500 ease-in-out ">
                  {Auth.getRoleAs() == 1 && (
                    <Link
                      to={`/admin`}
                      className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                    >
                      Dashboard
                    </Link>
                  )}
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
