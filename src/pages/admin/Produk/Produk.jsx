import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { BiPlusCircle, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Get from "../../../api/get.api";
import ModalEdit from "../../../components/modals/ModalEdit";
import getDatas from "../../../hooks/getDatas";
import LoadingTable from "../../../components/loading/LoadingTable";
import { DELETE } from "../../../api/delete.api";
import ModalTambahProduk from "../../../components/modals/ModalTambahProduk";
export default function Produk() {
  const [show, setShow] = useState({
    modalEdit: false,
    modalTambah: false,
    data: {},
  });
  const { loading, data, error, setFetched, fetched } = getDatas(Get.produk);
  const handleDeleteProduk = (e, id) => {
    e.preventDefault();
    DELETE.deleteProduk(id).then((res) => console.log(res));
  };

  return (
    <>
      {show.modalEdit && (
        <ModalEdit
          setFetched={setFetched}
          fetched={fetched}
          setModal={setShow}
          data={show.data}
        />
      )}
      {show.modalTambah && <ModalTambahProduk setModal={setShow} />}
      {error && error}
      <div className="flex justify-between w-full mb-4">
        <div>
          <div htmlFor="" className="relative  ">
            <input
              type="text"
              placeholder="cari produk..."
              className="outline-none peer rounded-lg  w-56 h-10 border px-2 "
              name=""
              id="produk"
            />
            <label
              htmlFor="produk"
              className="absolute flex items-center text-abu peer-focus:text-primary transisi  h-full right-0 top-0 px-2"
            >
              <BiSearch size={25} className="" />
            </label>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShow({ modalTambah: !show.modalTambah })}
            className="btn px-2 py-2 rounded-lg flex items-center gap-x-1"
          >
            <BiPlusCircle size={25} />
            Tambah Produk
          </button>
        </div>
      </div>
      {loading && <LoadingTable />}
      {!loading && (
        <table className="table-auto w-full font-medium  border-collapse ">
          <thead className="border">
            <tr className="bg-gray-200 capitalize border ">
              <th className=" px-2 py-2 text-center">No</th>
              <th className=" px-2 py-2 text-center">Produk</th>
              <th className=" px-2 py-2 text-center">Nama</th>
              <th className=" px-2 py-2 text-center">Kategori</th>
              <th className=" px-2 py-2 text-center">Harga</th>
              <th className=" px-2 py-2 text-center">stok</th>
              <th className=" px-2 py-2 text-center">aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.data?.map((produks) => (
                <tr key={produks.id} className="border">
                  <td className=" text-center">1</td>
                  <td className="flex justify-center items-center">
                    <img className="h-12 w-12" src={produks.foto} alt="" />
                  </td>
                  <td className=" text-center">{produks.nama}</td>
                  <td className=" text-center">{produks.kategori?.name}</td>
                  <td className=" text-center">
                    <FormatRupiah value={produks.harga} />
                  </td>
                  <td className="text-center">
                    <span className=" font-bold  text-primary text-center px-5 py-1 rounded-lg bg-primary/20 ">
                      {produks.stok}
                    </span>
                  </td>
                  <td className="  text-center">
                    <div className="flex items-center gap-1 justify-center ">
                      <button
                        onClick={() =>
                          setShow({ modalEdit: !show.modalEdit, data: produks })
                        }
                        className="btn py-1 px-2 rounded-lg capitalize"
                      >
                        edit
                      </button>
                      <button
                        onClick={(e) => handleDeleteProduk(e, produks.id)}
                        className="btn py-1 px-2 rounded-lg capitalize"
                      >
                        hapus
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
