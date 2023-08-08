import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import ApiAuth from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
export default function Form() {
  const [email, setEmail] = useState("agillstrz@gmail.com");
  const [password, setPassword] = useState("Katasandi321");
  const [login, setLogin] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(true);
    ApiAuth.Login(email, password).then((res) => {
      toast.success(res.data.message);
      setLogin(false);
      navigate("/");
    });
  };

  return (
    <>
      <Toaster />
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex  flex-col gap-y-7">
          <div className="relative group h-12 w-[20rem]">
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="formLogin  peer transisi "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute tracking-wide opacity-0 peer-focus:opacity-100 peer-focus:-top-[1px] peer-focus:bg-white top-1/2 -translate-y-1/2 cursor-text text-lg text-gray-500  capitalize peer-focus:text-primary peer-focus:scale-90 transisi"
            >
              email
            </label>
            <div className="absolute pr-2 text-gray-500 text-xl right-0 top-1/2 peer-focus:text-primary -translate-y-1/2 transisi">
              @
            </div>
            <span className="absolute -bottom-[18px] font-semibold italic left-2 text-[13px] text-red-500">
              email error
            </span>
          </div>
          <div className="relative group h-10 w-[20rem]">
            <input
              type={`${password ? "password" : "text"}`}
              id="password"
              placeholder="Password"
              className="formLogin peer transisi"
              onChange={(e) => setPassword(e.target.value)}
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
            <span className="absolute -bottom-[18px] font-semibold italic left-2 text-[13px] text-red-500">
              email error
            </span>
          </div>
          <button className="w-full h-10 rounded-lg bg-primary flex justify-center items-center text-white font-bold hover:bg-secondary transisi ">
            {!login ? (
              "login"
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
