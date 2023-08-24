import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CONSTANT } from "../../utils/Constant";
import { Toaster, toast } from "react-hot-toast";
import Auth from "../../utils/Auth";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState({
    errorEmail: "",
    errorPassword: "",
  });

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)) {
      setError({ ...error, errorEmail: "Email tidak valid." });
    } else {
      setError({ ...error, errorEmail: "" });
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
      setError({
        ...error,
        errorPassword:
          "Password harus terdiri dari minimal 8 karakter, memiliki setidaknya 1 huruf kecil, 1 huruf besar, dan 1 angka.",
      });
    } else {
      setError({ ...error, errorPassword: "" });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    axios
      .post(`${CONSTANT.BASEURL}register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        Auth.storeInfoCookie(res.data);
        setLogin(false);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLogin(false);
      });
  };
  return (
    <>
      <Toaster />
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
              className={`absolute  left-0 peer-focus:-top-3 lg:peer-focus:top-0  py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
                name ? "lg:top-0 -top-3 -translate-y-1/2  " : "top-1/2"
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
              onChange={handleEmailChange}
            />
            <label
              htmlFor="input"
              className={`absolute  left-0 peer-focus:-top-3 lg:peer-focus:top-0  py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
                email ? "lg:top-0 -top-3 -translate-y-1/2  " : "top-1/2"
              }`}
            >
              Email
            </label>
            <div className="mb-2">
              {error.errorEmail !== "" && (
                <span className=" font-semibold absolute  italic left-0 text-[13px] text-red-500">
                  {error.errorEmail}
                </span>
              )}
            </div>
          </div>
          <div className="relative group h-10 w-[20rem]">
            <input
              type={`${showPassword ? "password" : "text"}`}
              id="password"
              className="border-b-2 peer  transition-all duration-200 ease-in-out outline-none border-gray-300  py-2 w-full"
              value={password}
              onChange={handlePasswordChange}
            />
            <label
              htmlFor="password"
              className={`absolute  left-0 peer-focus:-top-3 lg:peer-focus:top-0  py-[1px]   -translate-y-1/2  text-gray-500 text-md transition-all transform origin-left pointer-events-none ${
                password ? "lg:top-0 -top-3 -translate-y-1/2  " : "top-1/2"
              }`}
            >
              Password
            </label>
            <div className="mb-2">
              {error.errorPassword !== "" && (
                <span className=" font-semibold absolute  italic left-0 text-[13px] text-red-500">
                  {error.errorPassword}
                </span>
              )}
            </div>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer text-xl pr-2 text-gray-500 right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>
          <button
            className={`${
              error.errorPassword == "" && error.errorEmail == ""
                ? ""
                : "bg-white"
            } w-full h-10 rounded-lg bg-primary flex justify-center items-center text-white font-bold hover:bg-secondary transisi `}
          >
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
    </>
  );
}
