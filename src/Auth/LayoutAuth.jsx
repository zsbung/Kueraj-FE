import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import bg from "../assets/bg.svg";
import fotoLogin from "../assets/img/login.png";
import Login from "./login/Login";
import Register from "./register/Register";
export default function LayoutAuth() {
  const [login, setLogin] = useState(true);
  const transition = {
    initial: { x: "100vw" },
    animate: {
      x: 0,
    },
    transition: {
      duration: 1,
    },
    exit: {
      opacity: [1, 0],
      position: "absolute",
      right: [0, -500],
      top: 20,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div
      key={location.key}
      location={location}
      className=" h-screen w-screen  lg:p-10 p-2 bg-cover bg-center overflow-hidden "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex relative  w-full h-full lg:bg-base rounded-xl overflow-hidden   text-black text-md">
        <div className=" w-1/2 hidden relative  bg-primary  justify-center items-center  lg:flex ">
          <img className="h-[90%]" src={fotoLogin} alt="" />
        </div>
        <AnimatePresence>
          {login && <Login transition={transition} setLogin={setLogin} />}
        </AnimatePresence>
        <AnimatePresence>
          {!login && <Register transition={transition} setLogin={setLogin} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
