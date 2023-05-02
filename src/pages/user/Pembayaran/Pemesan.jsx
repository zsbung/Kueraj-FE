import React, { useState } from "react";

export default function Pemesan({ handleOnChange }) {
  const [prev, setPrev] = useState(false);
  return (
    <div className=" w-full border p-3  rounded-lg">
      <div className="w-full flex justify-between">
        <h1 className="title mb-2">Informasi Pemesan</h1>
        <p className="capitalize text-[12px] font-semibold mb-2  flex items-center gap-x-1">
          <input
            onClick={() => setPrev(!prev)}
            type="checkbox"
            className="cursor-pointer "
            name=""
            id=""
          />
          pemesan sebelumnya
        </p>
      </div>

      <form action="" className="grid gap-x-5 gap-y-3 font-medium grid-cols-2">
        <div className="w-full">
          <label className="" htmlFor="">
            Nama Depan*
          </label>
          <input
            type="text"
            name="namaDepan"
            onChange={handleOnChange}
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nama Belakang*
          </label>
          <input
            name="namaBelakang"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>

        <div className="w-full">
          <label className="" htmlFor="">
            provinsi*
          </label>
          <input
            name="kota"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            kabupaten/kota*
          </label>
          <input
            name="kota"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full col-span-2">
          <label className="" htmlFor="">
            Alamat Lengkap*
          </label>
          <input
            name="alamat"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Kode Pos*
          </label>
          <input
            name="kodePos"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nomor Hp*
          </label>
          <input
            name="noHp"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Email*
          </label>
          <input
            name="email"
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none"
          />
        </div>
      </form>
    </div>
  );
}
