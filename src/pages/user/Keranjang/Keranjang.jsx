import React from "react";
import CardKeranjang from "./CardKeranjang";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function Keranjang() {
  return (
    <>
      <h1 className="titles text-center my-5">Keranjang</h1>
      <div className="flex gap-x-5">
        <div className="lg:w-[70%]">
          <CardKeranjang />
        </div>
        <div
          className={` lg:p-5 p-3 lg:w-[30%] border lg:sticky fixed bg-white lg:left-auto  bottom-0 left-0  w-full    rounded-lg  transition-all duration-75 ease-in`}
        >
          <p className="font-semibold mb-2 text-start  text-[18px] tracking-wider capitalize">
            Ringkasan
          </p>
          <div className="flex gap-x-2 items-center">
            <input
              type="checkbox"
              className="h-4 w-4 cursor-pointer focus:text-primary"
            />
            <label htmlFor="">Pilih semua</label>
          </div>
          <div className=" text-[14px] font-medium">
            <div className="flex  justify-between">
              <p>Total Harga (10 barang) </p>
              <p className="font-bold">
                <FormatRupiah value={190000} />{" "}
              </p>
            </div>
          </div>
          <button className="btn px-3 py-2 mt-5 rounded-lg text-white    w-full flex ">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
