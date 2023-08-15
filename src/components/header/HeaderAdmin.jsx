import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { useLocation, useParams } from "react-router-dom";
import { MyContext } from "../../context/Context";
import Auth from "../../utils/Auth";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../loading/Skeleton";

export default function HeaderAdmin() {
  const { pathname } = useLocation();
  // const { user } = useContext(MyContext);
  const { data: user, loading } = Fetcher("me");

  return (
    <>
      <header className="flex h-16 px-5 bg-[#F3F5F7] font-bold items-center w-full sticky top-0 z-[9999] capitalize justify-between">
        {pathname.split("/").pop()}
        <div className=" transisi gap-x-1  text-md flex items-center  hover:text-primary cursor-pointer">
          {loading ? (
            <Skeleton style={`w-24 h-6 rounded-md`} />
          ) : (
            <>
              <RxAvatar className="w-6 h-6 rounded-full " />
              {user?.name}
            </>
          )}
          {/* {Auth.isAuthorization() ? user.name : "Admin"} */}
        </div>
      </header>
    </>
  );
}
