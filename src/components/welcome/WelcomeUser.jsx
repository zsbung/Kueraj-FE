import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/img/home.png";
export default function WelcomeUser() {
  return (
    <div className="w-full h-[14rem] lg:px-10 lg:p-5 p-2 lg:h-[30rem] shadow-lg rounded-lg gap-x-2 bg-opacity-40 bg-primary/80 bg-cover bg-center relative flex items-center flex-row overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-1/2 flex flex-col gap-y-3 z-10 text-white"
      >
        <h1 className="font-bold text-sm lg:font-extrabold lg:text-4xl">
          Welcome <span className="block">BungaBusana Fashion</span>
        </h1>
        <p className="font-semibold text-sm lg:text-2xl">
          Menyediakan berbagai macam kebutuhan fashion
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, y: "-60%", opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-1/2 flex lg:justify-end justify-center z-10 overflow-hidden"
      >
        <img src={img} className="" alt="" />
      </motion.div>
      <div className="absolute w-full top-0 left-0 -z-0  opacity-50  h-full ">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
