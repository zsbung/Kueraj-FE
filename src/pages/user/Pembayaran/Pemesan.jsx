import axios from "axios";
import React, { useEffect, useState } from "react";
import { CONSTANT } from "../../../utils/Constant";
import axiosInstance from "../../../configs/AxiosInstance";
import Skeleton from "../../../components/loading/Skeleton";
import PemesanSebelum from "./PemesanSebelum";
export default function Pemesan({ handleOnChange, setForm, form }) {
  const [prev, setPrev] = useState(false);
  const [load, setLoad] = useState({
    prov: false,
    city: false,
  });
  const [post, setPost] = useState("");
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [selectProv, setSelectProv] = useState(1);

  async function getProvince() {
    setLoad({ ...load, prov: true });
    try {
      const response = await axios.get(`${CONSTANT.BASEURL}province`);
      setProv(response.data.rajaongkir.results);
      setLoad({ ...load, prov: false });
    } catch (error) {
      const { message } = error.response.data;
      console.log(error);
      setLoad({ ...load, prov: false });
    }
  }

  async function getCity() {
    setLoad({ ...load, city: true });
    await axios
      .get(`${CONSTANT.BASEURL}city?provinsi=${selectProv}`)
      .then((res) => setCity(res.data.rajaongkir.results))
      .finally(setLoad({ ...load, city: false }));
  }

  const handleCity = () => {
    const selectedValue = event.target.value;
    const [city_name, province, postal_code] = selectedValue.split(",");
    setPost(postal_code);
    setForm({
      ...form,
      provinsi: province,
      kota: city_name,
      kodepos: postal_code,
    });
  };
  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    getCity();
  }, [selectProv]);

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
        <div className="w-full col-span-2">
          <label className="" htmlFor="">
            Email*
          </label>
          <input
            name="email"
            onChange={handleOnChange}
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
            name="nama_depan"
            onChange={handleOnChange}
            className="border border-solid rounded-lg h-9 w-full outline-none px-2"
          />
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            Nama Belakang*
          </label>
          <input
            name="nama_belakang"
            onChange={handleOnChange}
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
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-9 w-full outline-none px-2"
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="">
            provinsi*
          </label>
          {load.prov && <Skeleton style={`h-9 rounded-lg w-full`} />}
          {!load.prov && (
            <select
              name="provinsi"
              className="border h-9 rounded-lg border-solid w-full outline-none"
              onChange={(e) => setSelectProv(Number(e.target.value))}
            >
              {prov &&
                prov.map((m) => (
                  <option key={m.province_id} value={m.province_id}>
                    {m.province}
                  </option>
                ))}
            </select>
          )}
        </div>
        <div className="w-full">
          <label className="" htmlFor="">
            kabupaten/kota*
          </label>
          {load.city && <Skeleton style={`h-9 rounded-lg w-full`} />}
          {!load.city && (
            <select
              name="kota"
              className="border h-9 rounded-lg border-solid w-full outline-none"
              onChange={handleCity}
            >
              {city &&
                city.map((m) => (
                  <option
                    key={m.city_id}
                    value={[m.city_name, m.province, m.postal_code]}
                  >
                    {m.city_name}
                  </option>
                ))}
            </select>
          )}
        </div>

        <div className="w-full">
          <label className="" htmlFor="">
            Kode Pos*
          </label>
          <input
            name="kodepos"
            value={post}
            disabled
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
            onChange={handleOnChange}
            type="text"
            className="border border-solid rounded-lg h-20 p-2 w-full outline-none"
          />
        </div>
      </form>
      {prev && <PemesanSebelum />}
    </div>
  );
}
