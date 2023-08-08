import React from "react";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../../components/loading/Skeleton";
import GoToTop from "../../helpers/GoToTop";

export default function Kategori() {
  const { data, loading, error } = Fetcher(
    "https://dummyjson.com/produxcts/categories"
  );
  return (
    <>
      <GoToTop />
      <div className="min-h-screen">
        <h1 className="titles py-5 text-center">Kategori</h1>
        {error && error}
        <div className="grid grid-cols-4 gap-5 place-content-center">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m, index) => (
                <Skeleton key={(m, index)} style={"lg:h-[17rem] rounded-lg"} />
              ))
            : data.map((m) => (
                <div
                  key={m.id}
                  className="lg:h-[17rem] bg-cover  bg-center rounded-md cursor-pointer  h-[17rem] w-full border shadow-lg flex justify-center items-center "
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0eWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')`,
                  }}
                >
                  <p className="text-xl font-bold text-white">{m}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}
