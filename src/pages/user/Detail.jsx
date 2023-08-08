import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosCart } from "react-icons/io";
import GoToTop from "../../helpers/GoToTop";
import Fetcher from "../../utils/Fetcher";
import { MyContext } from "../../context/Context";
import Ulasan from "./Ulasan";
export default function Detail() {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  let navigate = useNavigate();
  const [form, setForm] = useState({
    id: id,
    size: "",
  });

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const { tambah } = useContext(MyContext);
  const { data: produk, loading, error } = Fetcher(`detailProdukUser/${id}`);
  if (loading || !produk)
    return (
      <div className="h-screen  flex justify-center items-center">
        loading...
      </div>
    );

  return (
    <>
      <GoToTop />
      <div className=" w-full ">
        <span className="lg:text-[15px] text-gray-500">
          {produk?.produk?.kategori?.name} / {produk?.produk?.nama}
        </span>
        <div className="flex w-full lg:flex-row flex-col  mt-5  h-full gap-y-2 lg:h-[35rem] gap-x-7">
          <div className="lg:w-[50%] h-full  flex overflow-hidden  flex-col gap-y-2 rounded-lg">
            <div
              className="w-full h-[18rem] bg-cover bg-center lg:h-[80%] bg-abu rounded-lg"
              style={{ backgroundImage: `url(${produk?.produk?.foto}` }}
            ></div>
            <div className="h-[20%] w-full justify-between hidden  lg:flex gap-x-2 ">
              <div
                className=" bg-abu border h-full w-44 rounded-lg bg-cover bg-center "
                style={{ backgroundImage: `url(${produk?.produk?.foto}` }}
              ></div>
              <div
                className=" bg-abu border h-full w-44 rounded-lg bg-cover bg-center "
                style={{ backgroundImage: `url(${produk?.produk?.foto2}` }}
              ></div>
              <div
                className=" bg-abu border h-full w-44 rounded-lg bg-cover bg-center "
                style={{ backgroundImage: `url(${produk?.produk?.foto3}` }}
              ></div>
            </div>
          </div>
          <div className=" lg:w-[50%]  flex gap-y-1 relative  flex-col lg:gap-y-5">
            <div className="flex justify-between items-center">
              <h1 className="capitalize font-semibold text-[25px] text-start">
                {produk?.produk?.nama}
              </h1>
              <div className="flex gap-x-[1px] lg:text-[20px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= produk?.produk?.rating
                        ? "text-yellow-500 cursor-pointer"
                        : "text-black"
                    }
                  >
                    <AiFillStar />
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[14px] lg:text-[16px]">
              {produk?.produk?.deskripsi}
            </p>
            <div className="flex justify-between">
              <p className="font-bold text-2xl tracking-wider capitalize">
                <FormatRupiah value={`${produk?.produk?.harga}`} />
              </p>

              <div className="flex gap-x-1  ">
                <label
                  className={`${
                    produk?.produk?.ukuran_XL == 0 && "opacity-50"
                  } w-8 h-8  relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu`}
                >
                  <input
                    type="checkbox"
                    name="size"
                    disabled={produk?.produk?.ukuran_XL === 0 && true}
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    value={"XL"}
                  />
                  XL
                </label>
                <label
                  className={`${
                    produk?.produk?.ukuran_L == 0 && "opacity-50"
                  } w-8 h-8  relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu`}
                >
                  <input
                    type="checkbox"
                    name="size"
                    disabled={produk?.produk?.ukuran_L === 0 && true}
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                    value={"L"}
                  />
                  L
                </label>
                <label
                  className={`${
                    produk?.produk?.ukuran_M == 0 && "opacity-50"
                  } w-8 h-8  relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu`}
                >
                  <input
                    type="checkbox"
                    name="size"
                    disabled={produk?.produk?.ukuran_M === 0 && true}
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 cursor-pointer "
                    value={"M"}
                  />
                  M
                </label>
                <label
                  className={`${
                    produk?.produk?.ukuran_S == 0 && "opacity-50"
                  } w-8 h-8  relative  flex justify-center items-center rounded-lg cursor-pointer hover:bg-abu/75 translinear bg-abu`}
                >
                  <input
                    type="checkbox"
                    name="size"
                    disabled={produk?.produk?.ukuran_S === 0 && true}
                    onChange={handleOnchange}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
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

                <input
                  type="text"
                  name="jml"
                  onChange={() => console.log("kontol")}
                  className="outline-none w-[40%] h-[80%] text-center bg-base text-text flex justify-center items-center"
                />
                <button
                  disabled={count == 10 && true}
                  onClick={() => setCount((count) => count <= 10 && count + 1)}
                  className=" w-[30%] active:scale-75 text-[20px] grid place-content-center"
                >
                  +
                </button>
              </div>
              <div className="text-[13px]">
                <p className="">Hanya tersisa {produk?.produk?.stok} produk</p>
                <p className="text-[11px]">
                  Ayo beli sekarang, sebelum kehabisan!!
                </p>
              </div>
            </div>
            <div className="flex justify-start   gap-x-2  rounded-lg px-3 lg:px-0 py-5 lg:py-0  items-center  bg-white     font-medium  text-[16px] lg:relative fixed lg:left-0 right-2 left-2 bottom-0">
              <button
                // onClick={() => navigate(`/pembayaran`)}
                onClick={() => console.log(form)}
                className="btn lg:w-28 w-1/2 px-10 lg:py-3 py-2  tracking-wider text-white rounded-xl gap-x-1"
              >
                Beli
              </button>
              <button
                onClick={() => tambah(produk, count)}
                className="btn2 lg:w-44 w-1/2 py-2 lg:py-3 tracking-wider   text-cbtn rounded-xl gap-x-1"
              >
                <IoIosCart /> keranjang
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="min-h-screen bo">
        <h1 className="title">Ulasan Pembeli</h1>
        <div className="flex">
          <div className="lg:w-[20%] ">HALO</div>
          <div className="lg:w-[60%] flex flex-col gap-y-2">
            {produk && <Ulasan data={produk} />}
          </div>
        </div>
      </div>
    </>
  );
}
