import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchProduk({ text, onChange, name }) {
  return (
    <div htmlFor="" className="relative  ">
      <input
        type="text"
        placeholder={text}
        className="outline-none peer rounded-lg  w-56 h-10 border px-2 "
        name={name}
        onChange={onChange}
        id={name}
      />
      <label
        htmlFor={name}
        className="absolute flex items-center text-abu peer-focus:text-primary transisi  h-full right-0 top-0 px-2"
      >
        <BiSearch size={25} className="" />
      </label>
    </div>
  );
}
