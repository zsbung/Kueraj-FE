import React, { useContext } from "react";
import CardProduk from "../../../components/Card/CardProduk";
import { MyContext } from "../../../context/Context";
import { kategori, produk } from "../../../mockup/mockup";
import getDatas from "../../../hooks/getDatas";
import { useEffect } from "react";
import axios from "axios";
import Fetcher from "../../../utils/Fetcher";
import { useState } from "react";
import Skeleton from "../../../components/loading/Skeleton";
import GoToTop from "../../../helpers/GoToTop";
import Button from "../../../components/user/Button";

export default function Produk() {
  const { setTrow, trowx, tambah } = useContext(MyContext);
  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(12);
  const [skip, setSkip] = useState(0);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products?&limit=${count}&skip=${skip}`)
      .then((res) => setDatas([...data, ...res.data.products]))
      .catch((error) => setError(error.response.data.message))
      .finally(() => {
        setLoading(false);
        setFetched(false);
      });
  }, [skip]);

  const handleGetData = (e) => {
    e.preventDefault();
    setSkip(data.length);
  };

  return (
    <>
      <GoToTop />
      <div className="lg:mt-5">
        <div className="flex justify-between relative">
          <ul className="flex flex-wrap gap-3 text-[15px] capitalize">
            {kategori.slice(0, 6).map((m, index) => (
              <li
                key={index}
                className="px-3 py-1 rounded-lg hover:bg-primary cursor-pointer hover:text-white hover:font-semibold transition-all duration-100 ease-out border"
              >
                {m.nama}
              </li>
            ))}
          </ul>
          <span className="rounded-lg absolute right-0 border text-sm px-2 cursor-pointer ">
            . . .
          </span>
        </div>
      </div>
      <div className=" flex justify-end items-center mt-3">
        <p className="capitalize font-semibold tracking-wider text-[15px]">
          Kemeja baru
        </p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 mt-5 lg:gap-x-1   w-full gap-x-3  place-items-center   gap-y-5 ">
        {data &&
          data?.map((m, index) => (
            <CardProduk key={index} produk={m} id={m.id} />
          ))}
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
            <Skeleton
              key={m}
              style={`w-full lg:h-[18rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-abu`}
            />
          ))}
      </div>

      <div className="flex justify-center w-full mt-5">
        {/* <button
          className="z-[999]  bg-primary p-2 font-bold text-white active:scale-90 rounded-lg"
          onClick={handleGetData}
        >
          Lebih Banyak
        </button> */}

        <Button
          handleOnlick={handleGetData}
          nama={"Lebih Banyak"}
          style={`h-12 w-40 rounded-md hover:active:scale-95 bg-primary border border-transaparant hover:border-primary  hover:bg-white hover:text-primary text-white transition-all duration-300 ease-out`}
        />
      </div>
    </>
  );
}
