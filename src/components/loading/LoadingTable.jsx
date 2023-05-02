import React from "react";
import "./loading.css";
export default function LoadingTable() {
  return (
    <div>
      <div className="w-full h-12 skeleton mb-1"></div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((loading) => (
        <div
          key={loading}
          className="w-full h-10 skeleton border my-[2px]"
        ></div>
      ))}
    </div>
  );
}
