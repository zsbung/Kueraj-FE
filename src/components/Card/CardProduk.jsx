import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { VscHeartFilled } from "react-icons/vsc";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
export default function CardProduk({ produk, id }) {
  return (
    <div className="w-full lg:h-[24rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-white  flex flex-col">
      <div
        className="lg:h-[60%] h-[60%] bg-[#B7B7B7] bg-cover bg-center relative border"
        style={{
          backgroundImage: `url(${produk?.images[0]})`,
        }}
      >
        <div className="absolute right-2 top-2   group  text-transparent/60  translinear hover:text-red-600 hover:scale-125  p-1">
          <VscHeartFilled className="lg:text-[20px]" />
        </div>
      </div>
      <div className="lg:h-[40%] h-[40%]  p-2 text-text flex flex-col justify-between  lg:text-[15px] text-[11px]   lg:gap-y-[3px]">
        <Link to={`/produk/${id}`} className="grid lg:gap-y-[3px] group">
          <div className="flex gap-x-2 justify-between font-semibold tracking-wide">
            <div>
              <p className="group-hover:underline">{produk.title}</p>
              <p className="text-[12px] p-[2px] font-normal inline-flex border bg-abu/10 rounded-lg    ">
                {produk.category}
              </p>
            </div>
            <p>
              {" "}
              <FormatRupiah value={produk.price} />{" "}
            </p>
          </div>
          {/* <p className="text-gray-500 lg:text-[12px] text-[9px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p> */}
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
  );
}
