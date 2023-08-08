import React from "react";
import CardKategoris from "./CardKategoris";
import Fetcher from "../../../utils/Fetcher";
import Skeleton from "../../../components/loading/Skeleton";
export default function Kategoris() {
  const { data, loading, error } = Fetcher(
    "https://dummyjson.com/products/categories"
  );

  return (
    <div>
      <h1 className="titles mb-3">Kategori</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-2 place-items-center">
        {!data || loading
          ? [1, 2, 3, 4, 5].map((m) => (
              <Skeleton
                key={m}
                style={
                  "lg:w-[14em] w-[10rem] h-[14rem]  lg:h-[16rem] rounded-lg"
                }
              />
            ))
          : data.slice(0, 5).map((m, index) => <CardKategoris key={index} />)}
      </div>
    </div>
  );
}
