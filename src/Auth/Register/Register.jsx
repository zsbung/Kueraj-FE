import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
export default function Register({ transition, setLogin }) {
  let navigate = useNavigate();
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

      <Form />

      <div className="flex  justify-center items-end w-full text-gray-500 text-sm">
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setLogin(true)}
            className="text-primary hover:text-secondary  hover:underline cursor-pointer font-medium"
          >
            Login here
          </span>
        </p>
      </div>
      <p className="text-gray-500  text-sm">
        Kembali ke halaman{" "}
        <span
          onClick={() => navigate("/")}
          className="text-primary hover:text-secondary hover:underline cursor-pointer font-medium"
        >
          Home
        </span>
      </p>
    </motion.div>
  );
}
