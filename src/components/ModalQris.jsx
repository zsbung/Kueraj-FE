import React from "react";
import foto from "../assets/img/qris.jpg";
import { FormatRupiah } from "@arismun/format-rupiah";
export default function ModalQris({ handleFinish, setModal, datas }) {
  return (
    <div className="h-screen flex backdrop-blur-sm z-[9999] justify-center items-center top-0 left-0 w-full bg-black/30 fixed ">
      <div className="bg-white w-[25rem] min-h-[70%] rounded-lg flex flex-col justify-around items-center">
        <img src={foto} className="w-full h-full" alt="" />
        <div className="flex flex-col gap-y-2 w-full ">
          <p className="font-semibold  text-center text-xl">
            <FormatRupiah value={datas} />
          </p>
          <div className="flex justify-between w-full">
            <button
              onClick={() => setModal(false)}
              className="w-full btn py-2 font-semibold"
            >
              Batal
            </button>
            <button
              onClick={handleFinish}
              className="w-full btn py-2 font-semibold"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
