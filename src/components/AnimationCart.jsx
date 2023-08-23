import { motion } from "framer-motion";
import React from "react";
export default function AnimationCart({ img }) {
  return (
    <div className="fixed h-screen w-full z-[9999] top-0 left-0 flex justify-center items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 0.5, 0],
          top: "-25px",
          right: "210px",
        }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="h-32 overflow-hidden w-32 absolute rounded-full border bg-white flex justify-center items-center"
      >
        <img className=" h-full w-full" src={img} alt="" />
      </motion.div>
    </div>
  );
}
