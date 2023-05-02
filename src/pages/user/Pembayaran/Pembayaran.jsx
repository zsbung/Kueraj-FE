import { motion } from "framer-motion";
import React, { useState } from "react";
import GoToTop from "../../../helpers/GoToTop";
import Barang from "./Barang";
import Pemesan from "./Pemesan";
import Ringkasan from "./Ringkasan";
export default function Pembayaran() {
  const [check, setCheck] = useState(false);

  const [form, setForm] = useState({
    namaDepan: "",
    namaBelakang: "",
    alamat: "",
    kota: "",
    kodePos: "",
    email: "",
    metode: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <GoToTop />
      <motion.div
        initial={{ y: 15, opacity: 0.6 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
          },
        }}
        className="grid grid-cols-7 min-h-screen"
      >
        <div className=" col-span-7 lg:col-span-5 flex flex-col gap-y-5 lg:p-5 ">
          <Barang />
          <Pemesan handleOnChange={handleOnChange} />
        </div>
        <div className="col-span-7 lg:col-span-2   p-2 border relative rounded-lg ">
          <h1 className="font-bold mb-5 text-xl tracking-wider capitalize">
            Pilih pembayaran
          </h1>
          <div className="flex items-start flex-col gap-y-3 mb-40 lg:mb-5 ">
            <label
              htmlFor="gopay"
              className="capitalize flex flex-row-reverse cursor-pointer items-center gap-x-2   lg:text-[20px]"
            >
              <img
                src="https://seeklogo.com/images/G/gopay-logo-D27C1EBD0D-seeklogo.com.png"
                className="h-[14px] "
                alt=""
              />

              <input
                className="checked:bg-blue-700"
                type="radio"
                value={"gopay"}
                name="metode"
                id="gopay"
                onChange={handleOnChange}
              />
            </label>
            <label
              htmlFor="dana"
              className="capitalize flex flex-row-reverse cursor-pointer items-center gap-x-2  text-[14px]"
            >
              <img
                src="https://seeklogo.com/images/D/dana-e-wallet-app-logo-F56CE2EEE0-seeklogo.com.png"
                className="h-[14px]"
                alt=""
              />
              <input
                onChange={handleOnChange}
                type="radio"
                name="metode"
                value={"dana"}
                id="dana"
              />
            </label>
            <label
              htmlFor="bri"
              className="capitalize flex flex-row-reverse cursor-pointer items-center gap-x-2  text-[14px]"
            >
              <img
                className="h-[14px]"
                src="https://seeklogo.com/images/B/bank-bri-logo-8036F80C97-seeklogo.com.png"
                alt=""
              />
              <input
                onChange={handleOnChange}
                type="radio"
                name="metode"
                value={"bri"}
                id="bri"
              />
            </label>
          </div>
          <Ringkasan handleOnclick={handleOnclick} metode={form.metode} />
        </div>
      </motion.div>
    </>
  );
}
