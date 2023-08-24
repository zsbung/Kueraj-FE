import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import GoToTop from "../../../helpers/GoToTop";
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
  const [jenis, setJenis] = useState("");
  const [rating, setRating] = useState("");
  const [produk, setProduk] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  async function fetchData() {
    setPage(1);
    try {
      const res = await axios.get(
        `${CONSTANT.BASEURL}produkUser?page=${page}&search=${search}&kategori=${kategori}&harga_min=${harga_min}&harga_max=${harga_max}&rating=${rating}&jenis=${jenis}`
      );
      setDatas(res.data.products.data);
      setTotal(res.data.products.total);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [kategori, rating, harga_max, harga_min, search, jenis]);

  const handleGetData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `${
          CONSTANT.BASEURL
        }produkUser?page=${2}&search=${search}&kategori=${kategori}&harga_min=${harga_min}&harga_max=${harga_max}&rating=${rating}&jenis=${jenis}`
      );
      setDatas([...data, ...res.data.products.data]);

      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setRating("");
    setSearch("");
    setKategori("");
    setJenis("");
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
    <>
      <GoToTop />
      <div className="flex lg:flex-row flex-col gap-y-2 gap-x-5 ">
        <div className="lg:w-[15%] hidden lg:flex lg:min-h-screen overflow-hidden  z-[99]  bg-base sticky  lg:top-20  ">
          <SideProduk
            setMin={setHarga_min}
            setMax={setHarga_max}
            setRating={setRating}
            setDatas={setDatas}
            rating={rating}
            setJenis={setJenis}
          />
        </div>
        <div className="lg:w-[85%]   ">
          <div className="lg:mt-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSearch(produk);
              }}
              htmlFor=""
              className="relative mb-5  "
            >
              <input
                type="text"
                placeholder="cari produk..."
                className="outline-none peer rounded-lg focus:border-primary focus:w-full h-10 transition-all duration-500 ease-in-out w-full border px-2 "
                onChange={(e) => setProduk(e.target.value)}
              />
              <label className="absolute flex items-center right-0 text-abu peer-focus:text-primary transisi   h-full top-0 px-2">
                <BiSearch size={25} className="" />
              </label>
            </form>

            <KategoriProduk
              handleReset={handleReset}
              handleGetKategori={handleGetKategori}
            />
          </div>
          <Produk
            loading={loading}
            setDatas={setDatas}
            data={data}
            handleGetData={handleGetData}
            setSkip={setSkip}
          />
          {total !== data?.length && (
            <div className="flex justify-center">
              <button
                onClick={handleGetData}
                className="btn px-10 font-medium rounded-lg py-1"
              >
                Lihat lebih banyak
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
