import React from "react";

export default function BtnCart({ text, icon, onClick, stok }) {
  return (
    <button
      disabled={stok == 0 ? true : false}
      onClick={onClick}
      className="lg:px-4 lg:py-2 py-2 px-1 lg:w-full w-full border lg:text-[15px] text-[10px]  transition-all duration-200 ease-in-out flex justify-center items-center hover:font-semibold rounded-[2em] gap-x-[2px] lg:gap-x-1 hover:bg-primary hover:text-white active:scale-90"
    >
      {icon && icon} {text}
    </button>
  );
}
