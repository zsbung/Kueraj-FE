import React, { useState } from "react";
import Fetcher from "../../../utils/Fetcher";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "../../../components/loading/Skeleton";

export default function KategoriProduk({ handleGetKategori, handleReset }) {
  const [viewKategori, setViewKategori] = useState(false);
  const { data: kategori, loading, error } = Fetcher("kategori");

  return (
    <>
      <AnimatePresence>
        {viewKategori && (
          <motion.div
            initial={{ top: "100%" }}
            animate={{ top: "11rem" }}
            exit={{ top: "100%" }}
            className={` fixed flex flex-col bottom-0  top-44 gap-y-2  bg-white z-[999] w-full `}
          >
            <div className="w-full flex justify-center text-black ">
              <button
                onClick={() => setViewKategori(false)}
                className="font-bold text-[30px] w-10 h-10 flex justify-center items-center rounded-full border"
              >
                x
              </button>
            </div>
            {kategori && !loading ? (
              kategori?.data?.map((m, index) => (
                <li
                  onClick={(e) => {
                    handleGetKategori(e, m.id);
                    setViewKategori(false);
                  }}
                  key={index}
                  className="px-3 py-1 rounded-lg hover:bg-primary cursor-pointer hover:text-white hover:font-semibold transition-all duration-100 ease-out border"
                >
                  <span>{m.name}</span>
                </li>
              ))
            ) : loading ? (
              <div className="flex gap-x-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => (
                  <Skeleton key={m} style={`h-8 w-20 rounded-lg`} />
                ))}
              </div>
            ) : (
              { error }
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between relative">
        <ul className="flex flex-wrap gap-3 text-[15px] capitalize">
          <li
            onClick={handleReset}
            className="px-3 py-1 rounded-lg hover:bg-primary cursor-pointer hover:text-white hover:font-semibold transition-all duration-100 ease-out border"
          >
            <span>Reset Filter</span>
          </li>
          {kategori && !loading ? (
            kategori?.data?.map((m, index) => (
              <li
                onClick={(e) => handleGetKategori(e, m.id)}
                key={index}
                className="px-3 py-1 rounded-lg hover:bg-primary cursor-pointer hover:text-white hover:font-semibold transition-all duration-100 ease-out border"
              >
                <span>{m.name}</span>
              </li>
            ))
          ) : loading ? (
            <div className="flex gap-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((m) => (
                <Skeleton key={m} style={`h-8 w-20 rounded-lg`} />
              ))}
            </div>
          ) : (
            { error }
          )}
          <span
            onClick={() => setViewKategori(!viewKategori)}
            className="rounded-lg  border text-sm px-2 cursor-pointer "
          >
            . . .
          </span>
        </ul>
      </div>
    </>
  );
}
