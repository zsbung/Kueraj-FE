import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosCart } from "react-icons/io";
import GoToTop from "../../helpers/GoToTop";
import Fetcher from "../../utils/Fetcher";
export default function Detail() {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  let navigate = useNavigate();
  const [form, setForm] = useState({
    id: id,
    size: "",
    jml: count,
  });

  const handleOnchange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const {
    data: produk,
    loading,
    error,
  } = Fetcher(`https://dummyjson.com/products/${id}`);
  if (loading && !produk)
    return (
      <div className="h-screen flex justify-center items-center">
        loading...
      </div>
    );
  return (
    <>
      <GoToTop />
      <div className=" w-full ">
        <span className="lg:text-[15px] text-gray-500">
          {produk.category} / {produk.title}
        </span>
        <div className="flex w-full lg:flex-row flex-col  mt-5  h-full gap-y-2 lg:h-[35rem] gap-x-7">
          <div className="lg:w-[50%] h-full  flex overflow-hidden  flex-col gap-y-2 rounded-lg">
            <div className="w-full h-[18rem] lg:h-[80%] bg-abu rounded-lg">
              <img src={produk?.thumbnail} className="w-full h-full" alt="" />
            </div>
            <div className="h-[20%] w-full justify-between hidden  lg:flex gap-x-2 ">
              {produk?.images?.map((m, index) => (
                <div
                  key={index}
                  className=" bg-abu border h-full w-44 rounded-lg bg-cover bg-center "
                  style={{ backgroundImage: `url(${m}` }}
                ></div>
              ))}
            </div>
          </div>
          <div className=" lg:w-[50%]  flex gap-y-1 relative  flex-col lg:gap-y-5">
            <div className="flex justify-between items-center">
              <h1 className="capitalize font-semibold text-[25px] text-start">
                {produk.title}
              </h1>
              <div className="flex gap-x-1 text-star ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <p className="text-[14px] lg:text-[16px]">
              {produk.description}
              {JSON.stringify(form)}
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-2xl tracking-wider capitalize">
                <FormatRupiah value={`${produk.price}000`} />
              </p>

              <div className="flex gap-x-1  ">
                <label className="w-8 h-8  relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu">
                  <input
                    type="checkbox"
                    name="size"
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    value={"XL"}
                  />
                  XL
                </label>
                <label className="w-8 h-8 relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu">
                  <input
                    type="checkbox"
                    name="size"
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 "
                    value={"L"}
                  />
                  L
                </label>
                <label className="w-8 h-8 relative checked:border-black border  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu">
                  <input
                    type="checkbox"
                    name="size"
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 "
                    value={"M"}
                  />
                  M
                </label>
                <label className="w-8 h-8 relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu">
                  <input
                    type="checkbox"
                    name="size"
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 "
                    value={"S"}
                  />
                  S
                </label>
              </div>
            </div>
            <div className="flex lg:justify-start lg:gap-x-2 justify-between items-center">
              <div className="w-[8rem] h-12 border mt-2 items-center border-abu rounded-xl bg-abu flex ">
                <button
                  disabled={count == 1 && true}
                  onClick={() => setCount((count) => count >= 1 && count - 1)}
                  className=" w-[30%] active:scale-75 text-[20px] grid place-content-center"
                >
                  -
                </button>
                <span className="w-[40%] h-[80%] bg-base text-text flex justify-center items-center">
                  {count}
                </span>
                <button
                  disabled={count == 10 && true}
                  onClick={() => setCount((count) => count <= 10 && count + 1)}
                  className=" w-[30%] active:scale-75 text-[20px] grid place-content-center"
                >
                  +
                </button>
              </div>
              <div className="text-[13px]">
                <p className="">Hanya tersisa {produk.stock} produk</p>
                <p className="text-[11px]">
                  Ayo beli sekarang, sebelum kehabisan!!
                </p>
              </div>
            </div>
            <div className="flex justify-start   gap-x-2  rounded-lg px-3 lg:px-0 py-5 lg:py-0  items-center  bg-white     font-medium  text-[16px] lg:relative fixed lg:left-0 right-2 left-2 bottom-0">
              <button
                onClick={() => navigate(`/pembayaran`)}
                className="btn lg:w-28 w-1/2 px-10 lg:py-3 py-2  tracking-wider text-white rounded-xl gap-x-1"
              >
                Beli
              </button>
              <button className="btn2 lg:w-44 w-1/2 py-2 lg:py-3 tracking-wider   text-cbtn rounded-xl gap-x-1">
                <IoIosCart /> keranjang
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="min-h-screen bo">
        <h1 className="title">Ulasan Pembeli</h1>
        <div className="flex">
          <div className="lg:w-[20%] "></div>
          <div className="lg:w-[60%]">
            <div className=" flex lg:text-xl text-md items-center gap-x-1">
              <div className="h-6 w-6 rounded-full bg-black "></div>
              <p>Muhammad Agil</p>
            </div>
            <div className="text-[10px] lg:text-[15px]  flex flex-col gap-y-1 mt-2">
              <div className="flex  gap-x-1 text-star ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                quasi harum eius corporis reprehenderit quisquam accusantium
                dicta minus numquam excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
