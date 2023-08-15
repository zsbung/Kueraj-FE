import React from "react";
import { motion } from "framer-motion";

export default function CardKategoris() {
  return (
    <motion.div
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="lg:w-[14em] w-[10rem] h-[14rem]  lg:h-[16rem] relative group cursor-pointer hover:scale-95 ransition-all duration-200 ease-in-out overflow-hidden hover:contrast-150    flex justify-center rounded-lg  bg-cover bg-center "
    >
      <div
        className="absolute    w-full h-full bg-cover group-hover:rotate-2  bg-center group-hover:scale-110  transition-all duration-200 ease-in-out "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`,
        }}
      ></div>
      <h1 className="title absolute text-center p-3 flex justify-center items-center w-full h-full text-base ">
        Kemeja
      </h1>
    </motion.div>
  );
}
