import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../../configs/AxiosInstance";
import GoToTop from "../../../helpers/GoToTop";
import Barang from "./Barang";
import Pemesan from "./Pemesan";
import Ringkasan from "./Ringkasan";
export default function Pembayaran() {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState({
    modal: false,
    url: "",
  });
  let navigate = useNavigate();
  const { state } = useLocation();

  const [form, setForm] = useState({
    alamat: "",
    kota: "",
    nama_depan: "",
    nama_belakang: "",
    metode_pembayaran: "",
    nohp: "0822121212",
    catatan: "",
    provinsi: 1,
    tanggal_pemesanan: moment().format("LL"),
  });
  const { beli } = state;
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
      catatan,
      harga_ongkir,
      tanggal_pemesanan,
      nama_ongkir,
    } = form;
    const { beli } = state;
    axiosInstance
      .post("beli", {
        nohp,
        harga_ongkir,
        nama_ongkir,
        nama_depan,
        nama_belakang,
        nama,
        alamat,
        catatan,
        email,
        tanggal_pemesanan,
        kodepos,
        kota,
        beli,
        provinsi,
      })
      .then((res) => {
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
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
          <Ringkasan
            handleOnclick={handleOnclick}
            state={state}
            metode={form.metode}
          />
        </div>
      </motion.div>
    </>
  );
}
