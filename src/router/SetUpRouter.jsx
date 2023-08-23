import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutAuth from "../Auth/LayoutAuth";
import Dashboard from "../pages/admin/Dashboard";
import KategoriAdmin from "../pages/admin/KategoriAdmin";
import Pengguna from "../pages/admin/Pengguna";
import Produk from "../pages/admin/Produk/Produk";
import DetailPesananAdmin from "../pages/admin/penjualan/DetailPesanan";
import Penjualan from "../pages/admin/penjualan/Penjualan";
import About from "../pages/user/About";
import Detail from "../pages/user/Detail";
import DetailPesanan from "../pages/user/DetailPesanan";
import History from "../pages/user/History";
import Home from "../pages/user/Home";
import Kategori from "../pages/user/Kategori";
import Keranjang from "../pages/user/Keranjang/Keranjang";
import LayoutUser from "../pages/user/LayoutUser";
import Pembayaran from "../pages/user/Pembayaran/Pembayaran";
import LayoutProduk from "../pages/user/Produk/LayoutProduk";
import PrivateRoute from "./PrivateRoute";
import ProtectedRoute from "./ProtectedRoute";

export default function SetUpRouter() {
  return (
    // <AnimatePresence>
    <Routes>
      <Route path="/auth" element={<ProtectedRoute />} />
      <Route path="/admin" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="produk" element={<Produk />} />
        <Route path="kategori" element={<KategoriAdmin />} />
        <Route path="pesanan" element={<Penjualan />} />
        <Route path="pengguna" element={<Pengguna />} />
        <Route path="detail-pemesanan/:id" element={<DetailPesananAdmin />} />
      </Route>
      <Route path="/" element={<LayoutUser />}>
        <Route index element={<Home />} />
        {/* <Route path="kategori" element={<Kategori />} /> */}
        <Route path="produk" element={<LayoutProduk />} />
        <Route path="produk/:id" element={<Detail />} />
        <Route path="keranjang" element={<Keranjang />} />
        <Route path="kategori" element={<Kategori />} />
        <Route path="pembayaran" element={<Pembayaran />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/riwayat" element={<History />} />
        <Route path="/detail-pesanan/:id" element={<DetailPesanan />} />
      </Route>
    </Routes>
  );
}
