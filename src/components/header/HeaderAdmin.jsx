import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context/Context";
import Auth from "../../utils/Auth";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../loading/Skeleton";

export default function HeaderAdmin() {
  const { pathname } = useLocation();
  // const { user } = useContext(MyContext);
  let navigate = useNavigate();
  const { data: user, loading } = Fetcher("me");

  return (
    <>
      <header className="flex h-16 px-5 bg-[#F3F5F7] font-bold items-center w-full sticky top-0 z-10 capitalize justify-between">
        {pathname.split("/").pop()}
        <div className=" transisi gap-x-1  text-md flex items-center  hover:text-primary cursor-pointer">
          {loading ? (
            <Skeleton style={`w-24 h-6 rounded-md`} />
          ) : (
            <>
              <div className="group relative transisi gap-x-1   text-md flex items-center   hover:text-primary cursor-pointer">
                <RxAvatar className="w-6 h-6 rounded-full " />
                <>
                  {user?.name}
                  <div className="absolute top-5 -right-5   mt-1  w-[12rem] h-0 flex flex-col justify-center  group-hover:border  border-0  bg-base overflow-hidden   group-hover:h-24    shadow-lg rounded-xl     text-sm  z-[10] transition-all duration-500 ease-in-out ">
                    <Link
                      to={`/`}
                      className=" p-2 text-black hover:text-primary  hover:bg-base1 hover:underline"
                    >
                      Home
                    </Link>

                    <button
                      onClick={() => Auth.signOut(navigate)}
                      className=" p-2 text-black text-left hover:text-primary  hover:bg-base1 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                </>
              </div>
            </>
          )}
          {/* {Auth.isAuthorization() ? user.name : "Admin"} */}
        </div>
      </header>
    </>
  );
}
