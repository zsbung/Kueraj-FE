import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/AxiosInstance";
import GoToTop from "../../../helpers/GoToTop";
import Barang from "./Barang";
import Pemesan from "./Pemesan";
import Ringkasan from "./Ringkasan";
import moment from "moment";
export default function Pembayaran() {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const { state } = useLocation();
  const [form, setForm] = useState({
    alamat: "",
    kota: "",
    nama_depan: "",
    nama_belakang: "",
    metode_pembayaran: "",
    nohp: "0822121212",
    provinsi: 1,
    tanggal_pemesanan: moment().format("LL"),
  });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const [message, setMessage] = useState("");
  // const handleOnclick = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  // };
  const handleOnclick = (e) => {
    e.preventDefault();
    const {
      nama_depan,
      nama_belakang,
      nama,
      alamat,
      email,
      kodepos,
      kota,
      provinsi,
      nohp,
      harga_ongkir,
      tanggal_pemesanan,
      nama_ongkir,
    } = form;

    axiosInstance
      .post("beli", {
        nohp,
        harga_ongkir,
        nama_ongkir,
        nama_depan,
        nama_belakang,
        nama,
        alamat,
        email,
        tanggal_pemesanan,
        kodepos,
        kota,
        provinsi,
      })
      .then((res) => {
        // console.log(res.data);
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const windowWidth = 400; // Desired window width
        const windowHeight = 550; // Desired window height
        const left = (screenWidth - windowWidth) / 2;
        const top = (screenHeight - windowHeight) / 2;
        window.open(
          `${res.data.redirect_url}`,
          null,
          `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`
        );
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  useEffect(() => {
    if (message !== "") {
      toast.error(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
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
          <Barang data={state} />
          <Pemesan
            handleOnChange={handleOnChange}
            setForm={setForm}
            form={form}
          />
        </div>
        <div className="col-span-7 lg:col-span-2   p-2 border relative rounded-lg ">
          {/* <h1 className="font-bold mb-5 text-xl tracking-wider capitalize">
            Pilih pembayaran
          </h1> */}
          {/* <div className="flex items-start flex-col gap-y-3 mb-40 lg:mb-5 ">
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
                name="metode_pembayaran"
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
                name="metode_pembayaran"
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
                name="metode_pembayaran"
                value={"bri"}
                id="bri"
              />
            </label>
          </div> */}

          <Ringkasan
            handleOnclick={handleOnclick}
            total={state}
            metode={form.metode}
          />
        </div>
      </motion.div>
    </>
  );
}
