import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./loading/Skeleton";
import Fetcher from "../utils/Fetcher";
import CardProduk from "./Card/CardProduk";

export default function ProdukHome() {
  const { data, loading, error } = Fetcher("produk-home");
  return (
    <div>
      <h1 className="titles mb-3">Produk</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-2 place-items-center">
        {loading
          ? [1, 2, 3, 4, 5].map((m) => (
              <Skeleton
                key={m}
                style={
                  "lg:w-[14em] w-[10rem] h-[14rem]  lg:h-[16rem] rounded-lg"
                }
              />
            ))
          : data?.data?.map((produk, index) => (
              <CardProduk key={produk.id} produk={produk} />
            ))}
      </div>
      <div className="flex justify-center mt-4 w-full">
        <Link
          to={"/produk"}
          className="btn px-3 py-2 rounded-md  font-semibold"
        >
          Semua Produk
        </Link>
      </div>
    </div>
  );
}
