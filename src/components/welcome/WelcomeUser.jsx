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
          Welcome <span className="block">Toko Kue RAJ</span>
        </h1>
        <p className="font-semibold text-sm lg:text-2xl">
          Tempat di mana rasa dan kreativitas berkumpul untuk menciptakan kelezatan yang tak terlupakan.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, y: "-60%", opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-1/2 flex lg:justify-end justify-center z-10 overflow-hidden"
      >
        {/* <img src={img} className="" alt="" /> */}
      </motion.div>
      <div className="absolute w-full top-0 left-0 -z-0  opacity-50  h-full ">
        <img
          className="h-full w-full"
          src="https://firebasestorage.googleapis.com/v0/b/bungabusanaa-7e56d.appspot.com/o/asset_agis%2Fbanner2.jpg?alt=media&token=a7e6fb7f-9cf4-457c-9b7e-aaf5ed82afc7"
          alt=""
        />
      </div>
    </div>
  );
}
