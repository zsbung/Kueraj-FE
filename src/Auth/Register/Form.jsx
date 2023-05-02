import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
} from "react-icons/ai";
import { TfiPencilAlt } from "react-icons/tfi";

export default function Form() {
  const [password, setPassword] = useState(true);
  return (
    <form action="" autoComplete="off">
      <div className="flex  flex-col gap-y-5">
        <div className="relative group h-10 w-[20rem]">
          <input
            type="text"
            id="nama"
            placeholder="Nama"
            className="formLogin peer transisi"
          />
          <label
            htmlFor="nama"
            className="absolute tracking-wide opacity-0 peer-focus:opacity-100 peer-focus:-top-[1px] peer-focus:bg-white top-1/2 -translate-y-1/2 cursor-text text-lg text-gray-500  capitalize peer-focus:text-primary peer-focus:scale-90 transisi"
          >
            nama
          </label>
          <div className="absolute text-xl pr-2 text-gray-500 right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi">
            <TfiPencilAlt />
          </div>
        </div>
        <div className="relative group h-10 w-[20rem]">
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="formLogin peer transisi"
          />
          <label
            htmlFor="email"
            className="absolute tracking-wide opacity-0 peer-focus:opacity-100 peer-focus:-top-[1px] peer-focus:bg-white top-1/2 -translate-y-1/2 cursor-text text-lg text-gray-500  capitalize peer-focus:text-primary peer-focus:scale-90 transisi"
          >
            email
          </label>
          <div className="absolute text-xl pr-2 text-gray-500 right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi">
            @
          </div>
        </div>
        <div className="relative group h-10 w-[20rem]">
          <input
            type={`${password ? "password" : "text"}`}
            id="password"
            placeholder="Password"
            className="formLogin peer transisi"
          />
          <label
            htmlFor="password"
            className="absolute tracking-wide opacity-0 peer-focus:opacity-100 peer-focus:-top-[1px] peer-focus:bg-white top-1/2 -translate-y-1/2 cursor-text text-lg text-gray-500  capitalize peer-focus:text-primary peer-focus:scale-90 transisi"
          >
            password
          </label>
          <div
            onClick={() => setPassword(!password)}
            className="absolute cursor-pointer text-xl pr-2 text-gray-500 right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi"
          >
            {password ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>
        <button className="w-full h-10 rounded-lg bg-primary text-white font-bold hover:bg-secondary transisi ">
          Daftar
        </button>
      </div>
    </form>
  );
}
