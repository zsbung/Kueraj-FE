import React from "react";
import Produk from "./Produk";
import SideProduk from "./SideProduk";

export default function LayoutProduk() {
  return (
    <div className="flex lg:flex-row flex-col gap-x-5 ">
      <div className="lg:w-[15%] h-screen  sticky top-20  lg:flex ">
        <SideProduk />
      </div>
      <div className="lg:w-[85%]   ">
        <Produk />
      </div>
    </div>
  );
}
