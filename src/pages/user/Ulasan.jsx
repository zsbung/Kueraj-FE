import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Ulasan({ data }) {
  return (
    <>
      {data &&
        data?.ulasan?.map((m) => (
          <div key={m.id}>
            <div className=" flex lg:text-xl text-md items-center gap-x-1">
              <div className="h-6 w-6 rounded-full bg-black "></div>
              <p className="capitalize">{m.user?.name}</p>
            </div>
            <div className="text-[12px] lg:text-[15px]  flex flex-col gap-y-1 mt-2">
              <div className="flex gap-x-[1px] ">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= m.rating
                        ? "text-yellow-500 cursor-pointer"
                        : "text-black"
                    }
                  >
                    <AiFillStar />
                  </span>
                ))}
              </div>
              <p className="text-black text-md">{m.komentar}</p>
            </div>
          </div>
        ))}
    </>
  );
}
