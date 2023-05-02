import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { useEffect } from "react";

export default function Ringkasan({ metode, handleOnclick }) {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 150.3) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    });
  });
  return (
    <div
      className={`${
        check && "lg:top-20  z-[999]"
      } lg:p-2 p-3 border lg:sticky fixed bg-white lg:left-auto  bottom-0 left-0 lg:w-[325px] w-full    rounded-lg  transition-all duration-75 ease-in`}
    >
      <p className="font-semibold mb-2 text-start  text-[18px] tracking-wider capitalize">
        Ringkasan
      </p>
      <div className=" text-[14px] font-medium">
        <div className="flex  justify-between">
          <p>Total Harga (10 barang) </p>
          <p className="font-bold">
            <FormatRupiah value={190000} />{" "}
          </p>
        </div>
        {metode && (
          <p>
            Pembayaran melalui : <span className="font-bold">{metode}</span>
          </p>
        )}
      </div>
      <button
        onClick={handleOnclick}
        className="btn px-3 py-2 mt-5 rounded-lg text-white    w-full flex "
      >
        Bayar sekarang{" "}
      </button>
    </div>
  );
}
