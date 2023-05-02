import React, { useContext, useState } from "react";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { MyContext } from "../../context/Context";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
export default function CardRekomendasi({ id, produk }) {
  const { setTrow, trowx, tambah } = useContext(MyContext);

  return (
    <>
      <>
        <div className=" lg:h-[22rem]  w-full h-[15rem] border  rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-base  flex flex-col">
          <div
            className="lg:h-[60%] h-[60%] bg-[#B7B7B7] relative border bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/24/26786e77-a878-4e06-b7cf-82d4dfb4644a.jpg.webp?ect=4g')`,
            }}
          >
            <div className="absolute right-2 top-2     text-transparent/60  translinear hover:text-red-600 hover:scale-125  p-1">
              <VscHeartFilled className="lg:text-[20px]" />
            </div>
          </div>
          <div className="lg:h-[40%] h-[40%]   p-2 text-text grid  lg:text-[15px] text-[11px]   lg:gap-y-[3px]">
            <Link href={`/detail/${id}`} className="grid lg:gap-y-[3px] ">
              <div className="flex justify-between font-semibold tracking-wide">
                <p className="">{produk.nama}</p>
                <p>
                  {" "}
                  <FormatRupiah value={produk.harga} />{" "}
                </p>
              </div>
              <p className="text-gray-500 lg:text-[12px] text-[9px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </Link>
            <div className="flex gap-x-1 text-primary ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <button
              onClick={() => tambah(produk)}
              className="lg:px-3 lg:py-2 py-1 px-1 lg:w-full w-1/2 border lg:text-[15px] text-[10px]  transition-all duration-200 ease-in-out flex justify-center items-center hover:font-semibold rounded-[2em] gap-x-[2px] lg:gap-x-1 hover:bg-primary hover:text-white active:scale-90"
            >
              <IoIosCart /> keranjang
            </button>
          </div>
        </div>
      </>
    </>
  );
}
