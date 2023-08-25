import React from "react";
import Auth from "../utils/Auth";
import Fetcher from "../utils/Fetcher";
import CardRekomendasi from "./card/CardRekomendasi";
import Skeleton from "./loading/Skeleton";
export default function () {
  const { data, loading, error } = Fetcher(
    `rekomendasiProduk?user_id=${Auth.getId()}`
  );
  return (
    <div>
      <h1 className="titles mb-3">Rekomendasi</h1>
      <div className="flex justify-between gap-x-2">
        {loading ? (
          [1, 2, 3, 4].map((m) => (
            <Skeleton
              key={m}
              style={`w-full lg:w-[16rem] lg:h-[18rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-abu`}
            />
          ))
        ) : (
          <>
            {data?.rekomendasi?.map((m) => (
              <CardRekomendasi key={m.id} produk={m} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
