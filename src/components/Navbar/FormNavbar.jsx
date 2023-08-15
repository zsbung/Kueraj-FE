import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function FormNavbar({ search, setSearch }) {
  const [form, setForm] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/produk`, { state: form });
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
