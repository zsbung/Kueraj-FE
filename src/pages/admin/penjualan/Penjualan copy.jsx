import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalHapus from "../../../components/ModalHapus";
import LoadingTable from "../../../components/loading/LoadingTable";
import Fetcher from "../../../utils/Fetcher";
import { MdFileDownload } from "react-icons/md";

export default function Penjualan() {
  const { loading, data, error, setFetched } = Fetcher("listPemesan");
  const [show, setShow] = useState({
    item: {},
    modalHapus: false,
  });
  let navigate = useNavigate();

  return (
    <>
      {show.modalHapus && (
        <ModalHapus
          setModal={setShow}
          datas={show.data}
          setFetched={setFetched}
        />
      )}

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

                  <td className=" text-center">
                    {pemesan.nama_depan} {pemesan.nama_belakang}
                  </td>
                  <td className=" text-center">
                    <FormatRupiah value={pemesan?.transaksi?.harga_pesanan} />
                  </td>
                  <td className=" text-center">
                    {pemesan.transaksi?.status_pembayaran}
                  </td>
                  <td className=" text-center capitalize">
                    {pemesan.transaksi?.metode_pembayaran}
                  </td>
                  <td className="  text-center py-2">
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
                      <button
                        onClick={() =>
                          setShow({
                            modalHapus: !show.modalHapus,
                            data: { item: "listPemesan", id: pemesan.id },
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
