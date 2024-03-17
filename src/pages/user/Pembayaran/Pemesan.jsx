import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "../../../components/loading/Skeleton";
import { CONSTANT } from "../../../utils/Constant";
import PemesanSebelum from "./PemesanSebelum";
export default function Pemesan({ handleOnChange, setForm, form }) {
  const [prev, setPrev] = useState(false);

const kelurahan = [
  {
    nama:"Aren Jaya",
    kodepos : "17111"
  },
  {
    nama:"Bekasi Jaya",
    kodepos : "17112"
  },
  {
    nama:"Margahayu",
    kodepos : "17113"
  },
  {
    nama:"Duren Raya",
    kodepos : "17111"
  },
]

 

  return (
    <div className=" w-full border p-3  rounded-lg">
      <div className="w-full flex justify-between">
        <h1 className="title mb-2">Informasi Pemesan</h1>
        {/* <p className="capitalize text-[12px] font-semibold mb-2  flex items-center gap-x-1">
          <input
            required
            onClick={() => setPrev(!prev)}
            type="checkbox"
            className="cursor-pointer "
            name=""
            id=""
          />
          pemesan sebelumnya
        </p> */}
      </div>

      <form action="" className="grid gap-x-5 gap-y-3 font-medium grid-cols-2">
        <div className="w-full col-span-2">
          <label className="" htmlFor="">
            Email*
          </label>
          <input
            required
            name="email"
            onChange={handleOnChange}
            type="text"
            className="formPemesan"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nama Depan*
          </label>
          <input
            required
            type="text"
            name="nama_depan"
            onChange={handleOnChange}
            className="formPemesan"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nama Belakang*
          </label>
          <input
            required
            name="nama_belakang"
            onChange={handleOnChange}
            type="text"
            className="formPemesan"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nomor Hp*
          </label>
          <input
            required
            name="noHp"
            onChange={handleOnChange}
            type="text"
            className="formPemesan"
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="">
            provinsi*
          </label>
          <input
            required
            name="provinsi"
            value={"Jawa Barat"}
            disabled
            type="text"
            className="formPemesan"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            kabupaten/kota*
          </label>
          <input
            required
            name="kabupaten"
            value={"Bekasi"}
            disabled
            type="text"
            className="formPemesan"
          />
        </div>

        <div className="w-full">
        <label className="" htmlFor="">
            Kelurahan - Kode Pos
          </label>
        <select
              name="kodepos"
              
              className="border h-9 rounded-lg border-solid w-full outline-none"
              onChange={handleOnChange}
            >
                {kelurahan.map((m)=> 
                <option key={m.kodepos} value={`${m.nama} - ${m.kodepos}`}>
                    {m.nama} - ({m.kodepos})
                    </option>
                    )}
            </select>
        </div>

        <div className="w-full col-span-2">
          <label className="" htmlFor="">
            Alamat Lengkap*
          </label>
          <textarea
            name="alamat"
            onChange={handleOnChange}
            type="text"
            className="border-2 border-solid rounded-lg h-20 p-2 w-full outline-none focus:border-primary transition-all duration-150"
          />
        </div>
        <div className="w-full col-span-2">
          <label className="" htmlFor="">
            Tinggalkan Catatan
          </label>
          <textarea
            name="catatan"
            onChange={handleOnChange}
            type="text"
            className="border-2 border-solid rounded-lg h-20 p-2 w-full outline-none focus:border-primary transition-all duration-150"
          />
        </div>
      </form>
      {prev && <PemesanSebelum />}
    </div>
  );
}
