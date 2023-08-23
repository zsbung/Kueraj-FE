import React, { useEffect, useState } from "react";

export default function Ongkir({ handleOnclick }) {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 150.3) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    });
  });
  return (
    <div
      className={`${
        check && "lg:top-20  z-[999]"
      } lg:p-2 p-3 border lg:sticky fixed bg-white lg:left-auto  bottom-0 left-0 lg:w-[325px] w-full    rounded-lg  transition-all duration-75 ease-in`}
    >
      <p className="font-semibold mb-2 text-start  text-[18px] tracking-wider capitalize">
        Ongkir
      </p>
      <div></div>
    </div>
  );
}
