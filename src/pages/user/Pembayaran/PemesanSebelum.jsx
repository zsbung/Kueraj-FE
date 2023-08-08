import React from "react";

export default function PemesanSebelum() {
  return (
    <form action="" className="grid gap-x-5 gap-y-3 font-medium grid-cols-2">
      <div className="w-full col-span-2">
        <label className="" htmlFor="">
          Email*
        </label>
        <input
          name="email"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>
      <div className="w-full">
        <label className="" htmlFor="">
          Nama Depan*
        </label>
        <input
          type="text"
          name="namaDepan"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>
      <div className="w-full">
        <label className="" htmlFor="">
          Nama Belakang*
        </label>
        <input
          name="namaBelakang"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>
      <div className="w-full">
        <label className="" htmlFor="">
          Nomor Hp*
        </label>
        <input
          name="noHp"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>
      <div className="w-full">
        <label className="block" htmlFor="">
          provinsi*
        </label>
        <input
          name="noHp"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>
      <div className="w-full">
        <label className="" htmlFor="">
          kabupaten/kota*
        </label>
        <input
          name="noHp"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>

      <div className="w-full">
        <label className="" htmlFor="">
          Kode Pos*
        </label>
        <input
          name="kodePos"
          type="text"
          className="border border-solid rounded-lg h-9 w-full outline-none px-2"
        />
      </div>

      <div className="w-full col-span-2">
        <label className="" htmlFor="">
          Alamat Lengkap*
        </label>
        <textarea
          name="alamat"
          type="text"
          className="border border-solid rounded-lg h-20 p-2 w-full outline-none"
        />
      </div>
    </form>
  );
}
