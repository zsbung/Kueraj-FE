import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { BiPlusCircle, BiSearch } from "react-icons/bi";
import { DELETE } from "../../../api/delete.api";
import LoadingTable from "../../../components/loading/LoadingTable";
import Fetcher from "../../../utils/Fetcher";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import SearchProduk from "../../../components/Search/SearchProduk";
import { AnimatePresence } from "framer-motion";
import ModalEditProduk from "../../../components/modals/produk/ModalEditProduk";
import ModalTambahProduk from "../../../components/modals/produk/ModalTambahProduk";
import ModalHapus from "../../../components/ModalHapus";
import { Toaster, toast } from "react-hot-toast";
export default function Produk() {
  const [show, setShow] = useState({
    modalEdit: false,
    modalTambah: false,
    modalHapus: false,
    data: {},
  });
  const [message, setMessage] = useState("");
  const { data, loading, error, fetched, setFetched } = Fetcher("produk");
  const handleDeleteProduk = (e, id) => {
    e.preventDefault();
    DELETE.deleteProduk(id).then((res) => console.log(res.data.message));
  };
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <AnimatePresence>
        {show.modalEdit && (
          <ModalEditProduk
            setFetched={setFetched}
            setModal={setShow}
            data={show.data}
            setMessage={setMessage}
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
          setMessage={setMessage}
          datas={show.data}
          setFetched={setFetched}
        />
      )}
      <Toaster />
      {error && error}
      <div className="flex justify-between w-full mb-4">
        <div>
          <SearchProduk
            text={"cari produk..."}
            name={"produk"}
            onChange={handleOnchange}
          />
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
              data.data?.data?.map((produks, index) => (
                <tr key={produks.id} className="border">
                  <td className=" text-center">{++index}</td>
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
