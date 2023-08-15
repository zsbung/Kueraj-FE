import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "../../../mockup/UseDebounce";
import { CONSTANT } from "../../../utils/Constant";
import KategoriProduk from "./KategoriProduk";
import Produk from "./Produk";
import SideProduk from "./SideProduk";
export default function LayoutProduk() {
  const [data, setDatas] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(20);
  const [skip, setSkip] = useState(0);
  const [kategori, setKategori] = useState("");
  const [harga_min, setHarga_min] = useState("");
  const [harga_max, setHarga_max] = useState("");
  const [rating, setRating] = useState("");

  const [_search, setSearch] = useState("");
  const [search] = useDebounce(500, _search);
  async function fetchData() {
    try {
      const res = await axios.get(
        `${CONSTANT.BASEURL}produkUser?&limit=${count}&skip=${skip}&kategori=${kategori}&harga_min=${harga_min}&harga_max=${harga_max}&rating=${rating}`
      );
      setDatas(res.data.products);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [skip, kategori, rating, harga_max, harga_min, search]);
  const handleGetData = (e) => {
    e.preventDefault();

    setSkip(data.length);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setRating("");
    setSearch("");
    setKategori("");
    setHarga_max("");
    setHarga_min("");
    setSkip(0);
  };

  const handleGetKategori = (e, id) => {
    e.preventDefault();
    // setDatas([]);
    setKategori(id);
  };

  return (
    <div className="flex lg:flex-row flex-col gap-x-5 ">
      <div className="lg:w-[15%] min-h-screen  sticky top-20  lg:flex ">
        <SideProduk
          setMin={setHarga_min}
          setMax={setHarga_max}
          setRating={setRating}
          setDatas={setDatas}
          rating={rating}
        />
      </div>
      <div className="lg:w-[85%]   ">
        <div className="lg:mt-5">
          <div htmlFor="" className="relative mb-5  ">
            <input
              type="text"
              placeholder="cari produk..."
              className="outline-none peer rounded-lg focus:border-primary focus:w-full h-10 transition-all duration-500 ease-in-out w-full border px-2 "
              onChange={(e) => setSearch(e.target.value)}
            />
            <label className="absolute flex items-center right-0 text-abu peer-focus:text-primary transisi   h-full top-0 px-2">
              <BiSearch size={25} className="" />
            </label>
          </div>

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
          loading={loading}
          setDatas={setDatas}
          data={data}
          handleGetData={handleGetData}
          setSkip={setSkip}
        />
      </div>
    </div>
  );
}
