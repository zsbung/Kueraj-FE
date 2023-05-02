import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
export default function CardKeranjang() {
  const [count, setCount] = useState(1);
  return (
    <div className="w-full border grid place-items   gap-x-5  px-2 rounded-lg grid-cols-12">
      <div className="lg:col-span-1 col-span-2 flex justify-center items-center ">
        <input
          type="checkbox"
          className="h-6 w-6 cursor-pointer focus:ring-primary bg-primary text-primary"
        />
      </div>
      <div className="lg:col-span-2 col-span-3 ">
        <img
          className="lg:h-[6rem] h-[4rem]"
          src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/24/26786e77-a878-4e06-b7cf-82d4dfb4644a.jpg.webp?ect=4g"
          alt=""
        />
      </div>

      <div className="lg:col-span-6 order-3  lg:order-none col-span-12 text-[14px] lg:text-[20px]  grid place-content-cente">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>
          <FormatRupiah value={20000} />{" "}
        </p>
      </div>
      <div className="lg:col-span-2 col-span-4 grid place-content-center ">
        <div className="flex justify-center h-10 items-center border rounded-lg overflow-hidden border-primary">
          <button
            disabled={count == 1 && true}
            onClick={() => setCount(count !== 1 && ((count) => (count -= 1)))}
            className="text-[20px] p-1 text-center"
          >
            -
          </button>
          <input
            type="text"
            className="w-10 outline-none text-center ring-0"
            name=""
            value={count}
            id=""
          />
          <button
            disabled={count == 10 && true}
            onClick={() => setCount(count !== 10 && ((count) => (count += 1)))}
            className="text-[20px] p-1 text-center"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1  flex gap-x-2 justify-center items-center  cursor-pointer ">
        <RiDeleteBin5Fill className="text-[30px] hover:text-primary" />
      </div>
    </div>
  );
}
