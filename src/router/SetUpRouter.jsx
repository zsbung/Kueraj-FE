import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LayoutAuth from "../Auth/LayoutAuth";
import About from "../pages/user/About";
import Detail from "../pages/user/Detail";
import Home from "../pages/user/Home";
import LayoutUser from "../pages/user/LayoutUser";
import Pembayaran from "../pages/user/Pembayaran/Pembayaran";
import LayoutProduk from "../pages/user/Produk/LayoutProduk";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Keranjang from "../pages/user/Keranjang/Keranjang";
import Dashboard from "../pages/admin/Dashboard";
import Produk from "../pages/admin/Produk/Produk";
import Kategori from "../pages/admin/Kategori";
import Auth from "../utils/Auth";

export default function SetUpRouter() {
  return (
    // <AnimatePresence>
    <Routes>
      <Route path="/auth" element={<LayoutAuth />} />
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="produk" element={<Produk />} />
        <Route path="kategori" element={<Kategori />} />
      </Route>
      <Route path="/" element={<LayoutUser />}>
        <Route index element={<Home />} />
        {/* <Route path="kategori" element={<Kategori />} /> */}
        <Route path="produk" element={<LayoutProduk />} />
        <Route path="produk/:id" element={<Detail />} />
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="pembayaran" element={<Pembayaran />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
