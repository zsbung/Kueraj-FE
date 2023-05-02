import React from "react";
import Form from "./Form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
export default function Register({ transition, setLogin }) {
  return (
    <motion.div
      variants={transition}
      initial={transition.initial}
      animate={transition.animate}
      transition={transition.transition}
      exit={transition.exit}
      className="lg:w-1/2  w-full gap-y-4 flex flex-col lg:px-28 lg:py-10 justify-center items-center"
    >
      <h1 className="text-4xl font-semibold tracking-widest">Hello Again!</h1>
      <p className="text-gray-500  text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        asperiores, consectetur accusantium harum ab eligendi?
      </p>
      <Form />

      <div className="flex  justify-center items-end w-full text-gray-500 text-sm">
        <p>
          Dont have account?{" "}
          <span
            onClick={() => setLogin(true)}
            className="text-primary hover:text-secondary  hover:underline cursor-pointer font-medium"
          >
            sign'in
          </span>
        </p>
      </div>
    </motion.div>
  );
}
