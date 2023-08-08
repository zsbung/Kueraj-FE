import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";

export default function SideProduk({ setRating, rating, setDatas }) {
  const kategori = [
    {
      nama: "semua",
      path: "",
    },
    {
      nama: "pria",
      path: "",
    },
    {
      nama: "wanita",
      path: "",
    },
  ];
  return (
    <div className="w-full  ">
      <div className="flex lg:flex-col gap-y-4  gap-x-5 lg:gap-x-0 justify-between      ">
        <div>
          <h1 className="text-[16px] capitalize    mb-2 font-semibold">
            Kategori
          </h1>
          <ul className="flex flex-col gap-y-1   text-[14px]">
            {kategori.slice(0, 4).map((m, index) => (
              <li key={index} className="flex gap-x-3 cursor-pointer">
                <input type="radio" name="kategori" id={m.nama} />
                <label className="cursor-pointer" htmlFor={m.nama}>
                  {m.nama}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="l ">
          <h1 className="text-[16px] capitalize    mb-2 font-semibold">
            Harga
          </h1>
          <ul className="flex flex-col gap-y-1   text-[14px]">
            <li className="flex gap-x-3 jus cursor-pointer">
              <input type="radio" name="harga" id="10rb" />
              <label className="cursor-pointer" htmlFor="10rb">
                10 - 20 rb
              </label>
            </li>
            <li className="flex gap-x-3 cursor-pointer">
              <input type="radio" name="harga" id="20rb" />
              <label className="cursor-pointer" htmlFor="20rb">
                20 - 40 rb
              </label>
            </li>
            <li className="flex gap-x-3 cursor-pointer">
              <input type="radio" name="harga" id="404b" />
              <label className="cursor-pointer" htmlFor="404b">
                40 - 60 rb
              </label>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[16px] capitalize  mb-2 font-semibold">Rating</h1>
          <ul className="flex flex-col gap-y-1   text-[14px]">
            <li
              onClick={() => {
                setDatas([]);
                setRating(5);
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="star"
                defaultChecked={rating === 5 && true}
                id="5"
              />
              <label className="cursor-pointer" htmlFor="5">
                5 ⭐
              </label>
            </li>
            <li
              onClick={() => {
                setDatas([]);
                setRating(4);
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="star"
                defaultChecked={rating === 4 && true}
                id="4"
              />
              <label className="cursor-pointer" htmlFor="4">
                4 ⭐
              </label>
            </li>
            <li
              onClick={() => {
                setDatas([]);
                setRating(3);
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="star"
                defaultChecked={rating === 3 && true}
                id="3"
              />
              <label className="cursor-pointer" htmlFor="3">
                3 ⭐
              </label>
            </li>
            <li
              onClick={() => {
                setDatas([]);
                setRating(2);
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="star"
                defaultChecked={rating === 2 && true}
                id="3"
              />
              <label className="cursor-pointer" htmlFor="3">
                2 ⭐
              </label>
            </li>
            <li
              onClick={() => {
                setDatas([]);
                setRating(1);
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="star"
                defaultChecked={rating === 1 && true}
                id="3"
              />
              <label className="cursor-pointer" htmlFor="3">
                1 ⭐
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
