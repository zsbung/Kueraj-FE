import { FormatRupiah } from "@arismun/format-rupiah";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BiPlusCircle, BiSearch } from "react-icons/bi";
import ModalHapus from "../../../components/ModalHapus";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import LoadingTable from "../../../components/loading/LoadingTable";
import ModalEditProduk from "../../../components/modals/ModalEditProduk";
import ModalTambahProduk from "../../../components/modals/ModalTambahProduk";
import GoToTop from "../../../helpers/GoToTop";
import Fetcher from "../../../utils/Fetcher";
import SearchProduk from "../../../components/Search/SearchProduk";
import { useDebounce } from "../../../mockup/UseDebounce";
import axiosInstance from "../../../configs/AxiosInstance";
export default function Produk() {
  const [show, setShow] = useState({
    modalEdit: false,
    modalTambah: false,
    modalHapus: false,
    data: {},
  });

  const [data, setDatas] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [nama, setNama] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(nama);
  };
  useEffect(() => {
    setFetched(true);
    setLoading(true);
    axiosInstance
      .get(`produk?search=${search}`)
      .then((res) => {
        setDatas(res.data);
        setLoading(false);
      })
      .catch((error) => setError("gagal mendapatkan data..."))
      .finally(() => {
        setLoading(false);
      });
  }, [fetched, search]);

  return (
    <>
      <Toaster />
      <AnimatePresence>
        {show.modalEdit && (
          <ModalEditProduk
            setFetched={setFetched}
            setModal={setShow}
            data={show.data}
          />
        )}
        {show.modalTambah && (
          <ModalTambahProduk
            setFetched={setFetched}
            setModal={setShow}
            setMessage={setMessage}
          />
        )}
      </AnimatePresence>
      {show.modalHapus && (
        <ModalHapus
          setModal={setShow}
          datas={show.data}
          setFetched={setFetched}
        />
      )}
      <Toaster />
      <GoToTop />
      {error && error}
      <div className="flex justify-between w-full mb-4">
        <div>
          <form onSubmit={handleSearch} htmlFor="" className="relative  ">
            <input
              type="text"
              className="outline-none peer rounded-lg  w-56 h-10 border px-2 "
              name={`Cari Produk`}
              onChange={(e) => setNama(e.target.value)}
            />
            <label className="absolute flex items-center text-abu peer-focus:text-primary transisi  h-full right-0 top-0 px-2">
              <BiSearch size={25} className="" />
            </label>
          </form>
        </div>
        <div>
          <ButtonPrimary
            icon={<BiPlusCircle size={25} />}
            text={"tambah produk"}
            onclick={() => setShow({ modalTambah: !show.modalTambah })}
          />
        </div>
      </div>
      {loading && <LoadingTable />}
      {!loading && data && (
        <table className="table-auto w-full mb-5 font-medium  border-collapse ">
          <thead className="border">
            <tr className="bg-gray-200 capitalize border ">
              <th className=" px-2 py-2 text-center">No</th>
              <th className=" px-2 py-2 text-center">Produk</th>
              <th className=" px-2 py-2 text-center">Nama</th>
              <th className=" px-2 py-2 text-left">Kategori</th>
              <th className=" px-2 py-2 text-center">Harga</th>
              <th className=" px-2 py-2 text-center">stok</th>
              <th className=" px-2 py-2 text-center">aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.data?.data?.map((produks, index) => (
                <tr key={produks.id} className="border">
                  <td className="px-2  text-center">{++index}</td>
                  <td className="px-2 flex justify-center items-center">
                    <img className=" h-12 w-12" src={produks.foto} alt="" />
                  </td>
                  <td className="px-2  text-left">{produks.nama}</td>
                  <td className="px-2  text-left">{produks.kategori?.name}</td>
                  <td className="px-2  text-center">
                    <FormatRupiah value={produks.harga} />
                  </td>
                  <td className="px-2 text-center">
                    <span className="  font-bold  text-primary text-center px-5 py-1 rounded-lg bg-primary/20 ">
                      {produks.stok}
                    </span>
                  </td>
                  <td className="px-2   text-center">
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
                        onClick={() =>
                          setShow({
                            modalHapus: !show.modalHapus,
                            data: { item: "produk", id: produks.id },
                          })
                        }
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
