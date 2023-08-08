import React, { useEffect, useState } from "react";
import SearchProduk from "../../components/Search/SearchProduk";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { BiPlusCircle } from "react-icons/bi";
import ModalTambahKategori from "../../components/modals/ModalTambahKategori";
import { AnimatePresence } from "framer-motion";
import Fetcher from "../../utils/Fetcher";
import LoadingTable from "../../components/loading/LoadingTable";
import ModalHapus from "../../components/ModalHapus";
import { Toaster, toast } from "react-hot-toast";
import ModalTambahKategoriEdit from "../../components/modals/ModalTambahKategoriEdit";

export default function KategoriAdmin() {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState({
    modalTambah: false,
    modalEdit: false,
    modalHapus: false,
    data: {},
  });
  const { loading, data, error, setFetched } = Fetcher("kategori");

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      <AnimatePresence>
        {show.modalTambah && (
          <ModalTambahKategori
            setModal={setShow}
            setMessage={setMessage}
            setFetched={setFetched}
          />
        )}
        {show.modalEdit && (
          <ModalTambahKategoriEdit
            setModal={setShow}
            setMessage={setMessage}
            datas={show.data}
            setFetched={setFetched}
          />
        )}
      </AnimatePresence>
      <div className="flex justify-between mb-5 w-full">
        <SearchProduk text={"Cari Kategori..."} name={"Kategori..."} />
        <ButtonPrimary
          icon={<BiPlusCircle size={25} />}
          onclick={() => setShow({ modalTambah: !show.modalTambah })}
          text={"Tambah Kategori"}
        />
      </div>
      {show.modalHapus && (
        <ModalHapus
          setMessage={setMessage}
          datas={show.data}
          setModal={setShow}
          setFetched={setFetched}
        />
      )}
      {error && error}

      {loading && <LoadingTable />}
      {!loading && (
        <table className="table-auto w-full font-medium   border-collapse ">
          <thead className="border">
            <tr className="bg-gray-200 capitalize border ">
              <th className=" px-2 py-2 text-center">No</th>
              <th className=" px-2 py-2 text-center">Nama</th>
              <th className=" px-2 py-2 text-center">Foto</th>
              <th className=" px-2 py-2 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.map((kategori) => (
                <tr key={kategori.id} className="border">
                  <td className=" text-center">1</td>

                  <td className=" text-center">{kategori.name}</td>
                  <td className="flex py-1 justify-center items-center">
                    <img className="h-16" src={kategori.image} alt="" />
                  </td>

                  <td className="  text-center">
                    <div className="flex items-center gap-1 justify-center ">
                      <button
                        onClick={() =>
                          setShow({
                            modalEdit: !show.modalEdit,
                            data: kategori,
                          })
                        }
                        className="btn py-1 px-2 rounded-lg capitalize"
                      >
                        edit
                      </button>
                      <button
                        onClick={() =>
                          setShow({
                            modalHapus: !show.modalHapus,
                            data: { item: "kategori", id: kategori.id },
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
