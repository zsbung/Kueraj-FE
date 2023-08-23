import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { IoIosCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../../components/loading/Skeleton";
import "../../../components/loading/loading.css";
import GoToTop from "../../../helpers/GoToTop";
import Fetcher from "../../../utils/Fetcher";
import CardKeranjang from "./CardKeranjang";
export default function Keranjang() {
  const { data, loading, error, setFetched } = Fetcher("checkoutBarang");
  const [check, setCheck] = useState(true);
  let navigate = useNavigate();
  return (
    <>
      <GoToTop />
      <div className="min-h-screen">
        <h1 className="titles text-center my-5 flex items-center justify-center">
          Keranjang <IoIosCart size={40} />
        </h1>
        {data.total == 0 && (
          <div className="flex justify-center">Tidak ada produk</div>
        )}
        {/* {loading && !data && (
        <div className="flex justify-center gap-x-5 ">
          <div className="lg:w-[50%] skeleton h-[20rem] rounded-md"></div>
          <div className="lg:w-[30%] skeleton h-[12rem] rounded-md"></div>
        </div>
      )} */}
        {!data || loading ? (
          <div className="flex gap-x-5 justify-center">
            <Skeleton style={`lg:w-[50%] h-72 rounded-md`} />
            <Skeleton style={`lg:w-[30%] h-48 rounded-md`} />
          </div>
        ) : (
          <div className="flex justify-center gap-x-5 ">
            <div className="lg:w-[50%]">
              <div className="flex w-full gap-y-2 flex-col">
                {data?.keranjang &&
                  data?.keranjang.map((cart) => (
                    <CardKeranjang
                      setFetched={setFetched}
                      check={check}
                      cart={cart}
                      key={cart.id}
                    />
                  ))}
              </div>
            </div>
            {data && data.total !== 0 && (
              <div
                className={` lg:p-5 p-3 lg:w-[30%] border lg:sticky fixed bg-white lg:left-auto  bottom-0 left-0  w-full    rounded-lg  transition-all duration-75 ease-in`}
              >
                <p className="font-semibold mb-2 text-start  text-[18px] tracking-wider capitalize">
                  Ringkasan
                </p>
                {/* <div className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer focus:text-primary"
                />
                <label htmlFor="">Pilih semua</label>
              </div> */}
                <div className=" text-[14px] font-medium">
                  <div className="flex  justify-between">
                    <p>Total Harga ({data?.keranjang?.length} barang) </p>
                    <p className="font-bold">
                      <FormatRupiah value={data.total} />{" "}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/pembayaran", { state: data })}
                  className="btn px-3 py-2 mt-5 rounded-lg text-white    w-full flex "
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
