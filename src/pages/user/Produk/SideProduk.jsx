import React, { useState } from "react";

export default function SideProduk({
  setRating,
  setMin,
  setMax,
  rating,
  setJenis,
  setDatas,
}) {
  const [form, setForm] = useState({
    min: 0,
    max: 0,
  });
  const jenis = [
    {
      nama: "semua",
      path: "",
    },
    {
      nama: "pria",
      path: "pria",
    },
    {
      nama: "wanita",
      path: "wanita",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMin(form.min);
    setMax(form.max);
  };
  return (
    <div className="w-full  ">
      <div className="flex flex-wrap lg:flex-col gap-y-4  gap-x-5 lg:gap-x-0 justify-between      ">
        <div>
          <h1 className="text-[16px] capitalize    mb-2 font-semibold">
            Kategori
          </h1>
          <ul className="flex flex-col gap-y-1   text-[14px]">
            {jenis.slice(0, 4).map((m, index) => (
              <li key={index} className="flex gap-x-3 cursor-pointer">
                <input
                  type="radio"
                  onClick={() => setJenis(m.path)}
                  name="jenis"
                  id={m.nama}
                />
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col   w-44 gap-y-2"
          >
            <input
              placeholder="Minimal"
              onChange={(e) => setForm({ ...form, min: e.target.value })}
              className="outline-none h-10 px-1  border"
            />
            <input
              placeholder="Maksimal"
              onChange={(e) => setForm({ ...form, max: e.target.value })}
              className="outline-none h-10 px-1  border"
            />
            <button type="submit" className="btn h-8 font-semibold rounded-md">
              Terapkan
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-[16px] capitalize  mb-2 font-semibold">Rating</h1>
          <ul className="flex lg:flex-col gap-y-2   text-[14px]">
            <li
              onClick={() => {
                setRating("");
              }}
              className="flex gap-x-3 cursor-pointer"
            >
              <input type="radio" name="star" id="5" />
              <label className="cursor-pointer" htmlFor="5">
                semua ⭐
              </label>
            </li>
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
