import { AnimatePresence, easeInOut } from "framer-motion";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import bg from "../assets/bg.svg";
import fotoLogin from "../assets/img/login.png";
import bag1 from "../assets/img/bag1.png";
import Register from "./Register/Register";
import Login from "./login/Login";
import { motion } from "framer-motion";
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
          {/* <h1 className="text-4xl font-semibold p-2  border-2  border-solid rounded-xl border-base">
            Bunga Busana
          </h1> */}
          {/* <div
            className="w-full z-0 bg-center opacity-40 bg-cover  h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')`,
            }}
          /> */}
          {/* <motion.img
            // initial={{ x: 0 }}
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.7 }}
            src={foto}
            className="w-44"
            alt=""
          /> */}
        </div>

        <AnimatePresence>
          {login && <Login transition={transition} setLogin={setLogin} />}
        </AnimatePresence>
        <AnimatePresence>
          {!login && <Register transition={transition} setLogin={setLogin} />}
        </AnimatePresence>
        {/* {login && <Login setLogin={setLogin} />}
        {!login && <Register setLogin={setLogin} />} */}
      </div>
    </div>
  );
}
