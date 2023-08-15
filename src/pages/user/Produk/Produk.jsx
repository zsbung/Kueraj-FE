import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProduk from "../../../components/Card/CardProduk";
import Skeleton from "../../../components/loading/Skeleton";
import Button from "../../../components/user/Button";
import GoToTop from "../../../helpers/GoToTop";
import KategoriProduk from "./KategoriProduk";
import { CONSTANT } from "../../../utils/Constant";
import { useLocation } from "react-router-dom";
export default function Produk({ data, loading }) {
  return (
    <>
      <GoToTop />

      <div className=" grid grid-cols-2 lg:grid-cols-4 mt-5 lg:gap-x-1   w-full gap-x-3  place-items-center   gap-y-5 ">
        {loading || !data
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((m) => (
              <Skeleton
                key={m}
                style={`w-full lg:h-[18rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-abu`}
              />
            ))
          : data?.map((produk, index) => (
              <CardProduk key={index} produk={produk} />
            ))}
      </div>

      <div className="flex justify-center w-full mt-5">
        {/* {data && data.length >= 12 ? (
          <Button
            handleOnlick={handleGetData}
            nama={"Lebih Banyak"}
            style={`h-12 w-40 rounded-md hover:active:scale-95 bg-primary border border-transaparant hover:border-primary  hover:bg-white hover:text-primary text-white transition-all duration-300 ease-out`}
          />
        ) : data == "" ? (
          "tidak ada produk"
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}
