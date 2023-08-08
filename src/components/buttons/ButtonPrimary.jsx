import React from "react";

export default function ButtonPrimary({ icon, onclick, text }) {
  return (
    <button
      onClick={onclick}
      className={`font-bold border active:scale-95 transition-all duration-150 ease-linear bg-primary border-secondary hover:bg-secondary hover:border-primary text-white capitalize  px-[6px] py-[8px] rounded-lg flex items-center gap-x-1`}
    >
      {icon && icon}
      {text}
    </button>
  );
}
