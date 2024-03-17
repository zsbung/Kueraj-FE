import React, { useContext, useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../configs/AxiosInstance";
import { MyContext } from "../context/Context";
import Auth from "../utils/Auth";

export default function LayoutKasir() {
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
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
  let navigate = useNavigate();
  return (
    <div className="content">
      <div className="flex my-5 justify-between">
        <button onClick={() => navigate("/")}>Toko Kue RAJ</button>
        <div className="flex gap-x-2">
          <Link
            to={`/kasir`}
            className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
          >
            Kasir
          </Link>
          <Link
            to={`penjualan-kasir`}
            className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
          >
            Detail Pesanan
          </Link>
        </div>

        <div className="group relative transisi gap-x-1   text-md flex items-center   hover:text-primary cursor-pointer">
          <RxAvatar className="w-6 h-6 rounded-full " />
          {Auth.isAuthorization() && (
            <>
              {user?.name?.split(" ")}
              <div className="absolute top-5 -right-5   mt-1  w-[12rem] h-0 flex flex-col justify-center  group-hover:border  border-0  bg-base overflow-hidden   group-hover:h-24    shadow-lg rounded-xl     text-sm  z-[10] transition-all duration-500 ease-in-out ">
                {Auth.getRoleAs() == 3 && (
                  <>
                    <Link
                      to={`/admin`}
                      className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={`/kasir`}
                      className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                    >
                      Kasir
                    </Link>
                  </>
                )}
                <button
                  onClick={() => Auth.signOut(navigate)}
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
      <Outlet />
    </div>
  );
}
