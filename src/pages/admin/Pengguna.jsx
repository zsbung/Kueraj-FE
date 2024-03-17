import React, { useState } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useNavigate } from "react-router-dom";
import Fetcher from "../../utils/Fetcher";
import LoadingTable from "../../components/loading/LoadingTable";
import SearchProduk from "../../components/Search/SearchProduk";

export default function Pengguna() {
  const { loading, data, error } = Fetcher("pengguna");
  let navigate = useNavigate();
  return (
    <>
      {/* <div className="flex justify-start mb-5 w-full">
        <SearchProduk text={"Cari ..."} name={"Kategori..."} />
      </div> */}

      {error && error}

      {loading && <LoadingTable />}
      {!loading && (
        <table className="table-auto w-full font-medium   border-collapse ">
          <thead className="border">
            <tr className="bg-gray-200 capitalize text-left border ">
              <th className=" px-2 py-1 text-center">No</th>
              <th className=" px-2 py-2 ">Email</th>
              <th className=" px-2 py-2 ">Nama </th>
              <th className=" px-2 py-2 ">Provinsi</th>
              <th className=" px-2 py-2 ">Kota</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.map((pengguna, index) => (
                <tr key={pengguna.id} className="border text-left ">
                  <td className="border py-1 text-center">{++index}</td>

                  <td className="px-2 ">{pengguna.email}</td>

                  <td className="px-2 ">{pengguna.name}</td>
                  <td className="px-2  capitalize">{pengguna.provinsi}</td>
                  <td className="px-2  capitalize">{pengguna.kota}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
}
