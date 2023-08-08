import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useContext, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import BtnCart from "../buttons/BtnMain";
import { FaStar } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
export default function CardProduk({ produk }) {
  const { tambah } = useContext(MyContext);

  return (
    <>
      <Toaster />
      <div className="w-full lg:h-[24rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-white  flex flex-col">
        <div
          className="lg:h-[60%] h-[60%] bg-[#B7B7B7] bg-cover bg-center relative border"
          style={{
            backgroundImage: `url(${produk?.foto})`,
          }}
        >
          <div className="absolute right-2 top-2   group  text-transparent/60  translinear hover:text-red-600 hover:scale-125  p-1">
            <VscHeartFilled className="lg:text-[20px]" />
          </div>
        </div>
        <div className="lg:h-[40%] h-[40%]  p-2 text-text flex flex-col justify-between  lg:text-[13px] text-[11px]   lg:gap-y-[3px]">
          <Link
            to={`/produk/${produk.id}`}
            className="grid lg:gap-y-[3px] group"
          >
            <div className="flex gap-x-2 justify-between font-semibold tracking-wide">
              <div>
                <p className="group-hover:underline">{produk.nama}</p>
                <p className="text-[10px] p-[2px] font-normal inline-flex border bg-abu/10 rounded-lg    ">
                  {produk.kategori?.nama}
                </p>
              </div>
              <p>
                {" "}
                <FormatRupiah value={produk.harga} />{" "}
              </p>
            </div>

            <div className="flex gap-x-[1px] lg:text-[15px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= produk.rating
                      ? "text-yellow-500 cursor-pointer"
                      : "text-black"
                  }
                >
                  <AiFillStar />
                </span>
              ))}
            </div>
          </Link>

          <BtnCart
            icon={<IoIosCart />}
            onClick={() => tambah(produk, 1)}
            text={"keranjang"}
          />
        </div>
      </div>
    </>
  );
}
