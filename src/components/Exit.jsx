import React from "react";
import { ImCross } from "react-icons/im";

export default function Exit() {
  return (
    <div className="absolute right-0 top-0 m-5 cursor-pointer hover:text-primary   ">
      <ImCross size={25} className=" " />
    </div>
  );
}
