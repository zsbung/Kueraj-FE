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
    namaDepan: "",
    namaBelakang: "",
    nama: "kuze",
    alamat: "tebo",
    kota: "",
    kodepos: "7261",
    email: "agilz@gmail.com",
    metode_pembayaran: "",
    nohp: "0822121212",
    provinsi: 1,
    harga_ongkir: 5000,
    nama_ongkir: "jne",
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
  const handleOnclick = (e) => {
    e.preventDefault();
    const {
      namaDepan,
      namaBelakang,
      nama,
      alamat,
      email,
      kodepos,
      kota,
      metode_pembayaran,
      provinsi,
      nohp,
      harga_ongkir,
      tanggal_pemesanan,
      nama_ongkir,
    } = form;

    axiosInstance
      .post("pesan", {
        nohp,
        harga_ongkir,
        nama_ongkir,
        namaDepan,
        namaBelakang,
        nama,
        alamat,
        email,
        tanggal_pemesanan,
        kodepos,
        kota,
        metode_pembayaran,
        provinsi,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => setMessage(err.response.data.message));
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
          </div>

          {/* <Ongkir handleOnclick={handleOnclick} /> */}
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
