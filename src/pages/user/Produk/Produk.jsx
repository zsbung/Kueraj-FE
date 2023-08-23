import React from "react";
import CardProduk from "../../../components/card/CardProduk";
import Skeleton from "../../../components/loading/Skeleton";
import GoToTop from "../../../helpers/GoToTop";
export default function Produk({ data, loading }) {
  return (
    <>
      <GoToTop />
      {data?.length == 0 && (
        <div className="flex justify-center   my-5">
          Tidak dapat menemukan produk{" "}
        </div>
      )}
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

      <div className="flex justify-center w-full mt-5"></div>
    </>
  );
}
