import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { VscHeartFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import CartAnimation from "../CartAnimation";
import BtnCart from "../buttons/BtnMain";
export default function CardProduk({ produk }) {
  const { animate, handleKeranjang, image } = useContext(MyContext);
  return (
    <div className="relative w-full">
      <Toaster />
      {animate && <CartAnimation img={image} />}
      <div className="w-full lg:h-[24rem]  h-[18rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md  relative translinear bg-white  flex flex-col">
        <div
          className="lg:h-[60%] h-[50%] bg-[#B7B7B7] bg-cover bg-center relative border"
          style={{
            backgroundImage: `url(${produk?.foto})`,
          }}
        >
          {produk?.status == 0 && (
            <div className="absolute w-full h-full bg-black/70 flex justify-center items-center top-0 left-0 right-0 bottom-0 ">
              <h1 className="text-md text-primary font-semibold">Stok Habis</h1>
            </div>
          )}
          <div className="absolute right-2 top-2   group  text-transparent/60  translinear hover:text-red-600 hover:scale-125  p-1">
            <VscHeartFilled className="lg:text-[20px]" />
          </div>
        </div>
        <div className="lg:h-[40%] h-[50%]  p-2 text-text flex flex-col justify-between  lg:text-[13px] text-[11px]   lg:gap-y-[3px]">
          <Link to={`/produk/${produk.id}`} className="flex flex-col   group">
            <div className="flex gap-y-2 flex-col justify-between font-semibold tracking-wide">
              <div className="">
                <p className="group-hover:underline ">{produk.nama}</p>
                <div className="flex items-center gap-x-1">
                  <p className="text-[10px] p-[2px]  font-normal inline-flex border bg-abu/10 rounded-lg    ">
                    {produk.kategori?.name}
                  </p>
                </div>
              </div>
              <p>
                {" "}
                <FormatRupiah value={produk.harga} />{" "}
              </p>
            </div>
          </Link>

          <BtnCart
            stok={produk?.stok}
            icon={<IoIosCart />}
            // onClick={(e) => handleKeranjang(e, produk)}
            onClick={(e) => {
              handleKeranjang(e, produk, 1);
            }}
            text={"keranjang"}
          />
        </div>
      </div>
    </div>
  );
}
