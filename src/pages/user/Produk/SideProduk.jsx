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
      nama: "Semua",
      path: "",
    },
    {
      nama: "Pria",
      path: "pria",
    },
    {
      nama: "Wanita",
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
     
      </div>
    </div>
  );
}
