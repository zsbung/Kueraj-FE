import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import Fetcher from "../../../utils/Fetcher";
import axiosInstance from "../../../configs/AxiosInstance";

export default function Barang({ data }) {
  return (
    <div className=" w-full border p-3  rounded-lg">
      <h1 className="title mb-2">Tinjau kembali pesanan anda</h1>
      {data?.keranjang?.map((cart) => (
        <div key={cart.id} className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-x-2 lg:flex-row h-[24rem] lg:h-[7rem] lg:flex  hover:shadow-md p-2 w-full cursor-pointer">
            <div className=" lg:w-[20%]  bg-cover bg-center rounded-xl">
              <img className="h-full " src={cart.produk.foto} alt="" />
            </div>
            <div className="lg:w-[80%] h-[20%]">
              <h1 className="title lg:mb-2 ">{cart.produk.nama}</h1>
              <div className="text-[13px]">
                <p className="font-medium">ukuran : L</p>
              </div>
            </div>
            <div className="flex lg:w-[25%] items-end font-bold flex-col">
              <p>
                <FormatRupiah value={cart.produk.harga} />
              </p>
              <p className="font-medium">Jumlah : {cart.jml_produk}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
