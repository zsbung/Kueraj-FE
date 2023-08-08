import React, { useEffect, useState } from "react";
import Produk from "./Produk";
import SideProduk from "./SideProduk";
import axios from "axios";
import { CONSTANT } from "../../../utils/Constant";
import KategoriProduk from "./KategoriProduk";

export default function LayoutProduk() {
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(12);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga_min, setHarga_min] = useState("");
  const [harga_max, setHarga_max] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${CONSTANT.BASEURL}produkUser?&limit=${count}&skip=${skip}&search=${search}&kategori=${kategori}&harga_min=${harga_min}&harga_max=${harga_max}&rating=${rating}`
      )
      .then((res) => setDatas([...data, ...res.data.products]))
      .catch((error) => setError(error.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  }, [skip, kategori, rating]);

  const handleGetData = (e) => {
    e.preventDefault();
    setSkip(data.length);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`${CONSTANT.BASEURL}produkUser?&limit=${12}&skip=${0}`)
      .then((res) => setDatas(res.data.products))
      .catch((error) => setError(error.response.data.message))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGetKategori = (e, id) => {
    e.preventDefault();
    setDatas([]);
    setKategori(id);
  };
  return (
    <div className="flex lg:flex-row flex-col gap-x-5 ">
      <div className="lg:w-[15%] h-screen  sticky top-20  lg:flex ">
        <SideProduk setRating={setRating} setDatas={setDatas} rating={rating} />
      </div>
      <div className="lg:w-[85%]   ">
        <div className="lg:mt-5">
          <KategoriProduk
            handleReset={handleReset}
            handleGetKategori={handleGetKategori}
          />
          <div className=" flex justify-end items-center mt-3">
            <p className="capitalize font-semibold tracking-wider text-[15px]">
              Kemeja baru
            </p>
          </div>
        </div>
        <Produk
          handleReset={handleReset}
          loading={loading}
          setDatas={setDatas}
          data={data}
          handleGetData={handleGetData}
          setKategori={setKategori}
          setSkip={setSkip}
        />
      </div>
    </div>
  );
}
