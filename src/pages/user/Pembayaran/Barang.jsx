import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";

export default function Barang() {
  return (
    <div className=" w-full border p-3  rounded-lg">
      <h1 className="title mb-2">Tinjau kembali pesanan anda</h1>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col lg:flex-row h-[24rem] lg:h-[7rem] lg:flex  hover:shadow-md p-2 w-full cursor-pointer">
          <div className=" lg:w-[20%]  bg-cover bg-center rounded-xl">
            <img
              className="h-full "
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/24/26786e77-a878-4e06-b7cf-82d4dfb4644a.jpg.webp?ect=4g"
              alt=""
            />
          </div>
          <div className="lg:w-[80%] h-[20%]">
            <h1 className="title lg:mb-2 ">Produk abc</h1>
            <div className="text-[13px]">
              <p className="font-medium">ukuran : L</p>
              <p className="font-medium">warna : Ungu</p>
            </div>
          </div>
          <div className="flex lg:w-[25%] items-end font-bold flex-col">
            <p>
              <FormatRupiah value={2000} />
            </p>
            <p className="font-medium">Jumlah : 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
