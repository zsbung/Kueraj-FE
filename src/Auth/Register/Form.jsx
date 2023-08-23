import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CONSTANT } from "../../utils/Constant";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios
      .post(`${CONSTANT.BASEURL}register`, {
        name,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response.data.message));
  };
  return (
    <form action="" onSubmit={handleSubmit} autoComplete="off">
      <div className="flex  flex-col gap-y-7">
        <div className="relative group">
          <input
            type="text"
            id="input"
            className="border-b-2 peer  transition-all duration-200 ease-in-out outline-none border-gray-300  py-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="input"
            className={`absolute  left-0 peer-focus:top-0 py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
              name ? "top-0 -translate-y-1/2  e" : "top-1/2"
            }`}
          >
            Name
          </label>
        </div>
        <div className="relative group">
          <input
            type="text"
            id="input"
            className="border-b-2 peer  transition-all duration-200 ease-in-out outline-none border-gray-300  py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="input"
            className={`absolute  left-0 peer-focus:top-0 py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
              email ? "top-0 -translate-y-1/2  e" : "top-1/2"
            }`}
          >
            Email
          </label>
        </div>
        <div className="relative group h-10 w-[20rem]">
          <input
            type={`${showPassword ? "password" : "text"}`}
            id="password"
            className="border-b-2 peer  transition-all duration-200 ease-in-out outline-none border-gray-300  py-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`absolute  left-0 peer-focus:top-0 py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
              password ? "top-0 -translate-y-1/2  e" : "top-1/2"
            }`}
          >
            Password
          </label>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer text-xl pr-2 text-gray-500 right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
          {/* <span className="absolute -bottom-[20px] font-semibold italic left-2 text-[13px] text-red-500">
            email error
          </span> */}
        </div>
        <button className="w-full h-10 rounded-lg bg-primary flex justify-center items-center text-white font-bold hover:bg-secondary transisi ">
          {!login ? (
            "Register"
          ) : (
            <motion.span
              animate={{ rotate: 180 }}
              transition={{
                repeat: Infinity,
                duration: 0.15,
              }}
            >
              <ImSpinner9 />
            </motion.span>
          )}
        </button>
      </div>
    </form>
  );
}
