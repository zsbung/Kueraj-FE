import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
export default function FormNavbar({ setForm, form, search, setSearch }) {
  const reff = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative justify-end w-full items-center flex"
    >
      {!search && form !== "" && (
        <motion.span
          initial={{ opacity: 0, display: "none" }}
          animate={
            !search && {
              opacity: 1,
              display: "",
              transition: {
                delay: 0.4,
              },
            }
          }
        >
          {form}
        </motion.span>
      )}
      <input
        type="text"
        id="oke"
        onChange={(e) => setForm(e.target.value)}
        onClick={() => setForm("")}
        value={form}
        placeholder="Cari produk..."
        ref={reff}
        className={` h-10 ${
          search
            ? "w-full border"
            : "w-[8%] opacity-0  hover:border-primary placeholder:opacity-0"
        }   px-1    transition-all duration-[0.4s]  focus:border-primary  peer  outline-none rounded-xl   `}
      />
      <label
        onClick={() => setSearch(true)}
        htmlFor={!search ? "" : "oke"}
        className={`absolute hover:text-primary px-1  h-10 flex items-center rounded-lg peer-focus:text-primary translinear cursor-pointer    `}
      >
        <BiSearch className="text-xl font-bold" />
      </label>
    </form>
  );
}
