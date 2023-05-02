import React from "react";
import CardKategoris from "./CardKategoris";
export default function Kategoris() {
  return (
    <div>
      <h1 className="titles mb-3">Kategori</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-2 place-items-center">
        <CardKategoris />
        <CardKategoris />
        <CardKategoris />
        <CardKategoris />
        <CardKategoris />
      </div>
    </div>
  );
}
