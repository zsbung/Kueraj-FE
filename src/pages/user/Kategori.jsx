import { motion } from "framer-motion";
import React from "react";
import Skeleton from "../../components/loading/Skeleton";
import GoToTop from "../../helpers/GoToTop";
import Fetcher from "../../utils/Fetcher";
export default function Kategori() {
  const { data, loading, error } = Fetcher("kategori");
  return (
    <>
      <GoToTop />
      <div className="min-h-screen">
        <h1 className="titles py-5 text-center">Kategori</h1>
        {error && error}
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                <Skeleton key={m} style={"lg:h-[17rem] w-full rounded-lg"} />
              ))
            : data?.data?.map((m) => (
                <motion.div
                  key={m.id}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className=" h-[14rem] shadow-md w-full  lg:h-[18rem] relative group cursor-pointer hover:scale-95 ransition-all duration-200 ease-in-out overflow-hidden hover:contrast-150    flex justify-center rounded-lg  bg-cover bg-center border  "
                >
                  <div
                    className="absolute  group-hover:border  w-full h-full bg-cover group-hover:rotate-2  bg-center group-hover:scale-110  transition-all duration-200 ease-in-out "
                    style={{
                      backgroundImage: `url('${m.image}')`,
                    }}
                  ></div>
                  <h1 className="title bg-black/30  absolute text-center p-3 flex justify-center items-center w-full h-full text-base ">
                    {m.name}
                  </h1>
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
}
