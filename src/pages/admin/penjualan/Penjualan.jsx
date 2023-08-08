import React, { useState } from "react";
import SearchProduk from "../../../components/Search/SearchProduk";
import LoadingTable from "../../../components/loading/LoadingTable";
import Fetcher from "../../../utils/Fetcher";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useNavigate } from "react-router-dom";

export default function Penjualan() {
  const { loading, data, error } = Fetcher("listPemesan");
  let navigate = useNavigate();
  return (
    <>
      <div className="flex justify-start mb-5 w-full">
        <SearchProduk text={"Cari ..."} name={"Kategori..."} />
      </div>

      {error && error}

      {loading && <LoadingTable />}
      {!loading && (
        <table className="table-auto w-full font-medium   border-collapse ">
          <thead className="border">
            <tr className="bg-gray-200 capitalize border ">
              <th className=" px-2 py-1 text-center">No</th>
              <th className=" px-2 py-2 text-center">Nama pemesan</th>
              <th className=" px-2 py-2 text-center">total harga</th>
              <th className=" px-2 py-2 text-center">status pembayaran</th>
              <th className=" px-2 py-2 text-center">metode pembayaran</th>
              <th className=" px-2 py-2 text-center">Detail</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.map((pemesan, index) => (
                <tr key={pemesan.id} className="border">
                  <td className=" text-center">{++index}</td>

                  <td className=" text-center">{pemesan.nama}</td>
                  <td className=" text-center">
                    <FormatRupiah value={pemesan.harga_pesanan} />
                  </td>
                  <td className=" text-center">
                    {pemesan.status_pembayaran == 1 ? "lunas" : "belum bayar"}
                  </td>
                  <td className=" text-center capitalize">
                    {pemesan.metode_pembayaran}
                  </td>

                  <td className="  text-center">
                    <div className="flex items-center gap-1 justify-center ">
                      <button
                        onClick={() =>
                          navigate(`/admin/detail-pemesanan/${pemesan.id}`, {
                            state: pemesan,
                          })
                        }
                        className="btn py-1 px-2 rounded-lg capitalize"
                      >
                        Lihat
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
