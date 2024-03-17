import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Skeleton from "../../../components/loading/Skeleton";
import axiosInstance from "../../../configs/AxiosInstance";
import { MdFileDownload } from "react-icons/md";
import jsPDF from "jspdf";
import "jspdf-autotable"; // Im

export default function DetailPesananAdmin() {
  const { id } = useParams();
  const { state } = useLocation();
  const {
    email,
    nohp,
    provinsi,
    kota,
    alamat,
    nama_depan,
    nama_belakang,
    transaksi,
    kodepos,
  } = state;

  const [data, setDatas] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFetched(true);
    setLoading(true);
    axiosInstance
      .get(`detailPesananAdmin/${id}`)
      .then((res) => {
        setDatas(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("gagal mendapatkan data...");
        setLoading(false);
      });
  }, [fetched]);

  const handleUbahStatus = async (e) => {
    e.preventDefault();
    await axiosInstance
      .put(`updatePesanan/${id}`, {
        pemesan: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        setFetched(!fetched);
      })
      .catch((err) => console.log(err));
  };
  const exportPdf = () => {
    const doc = new jsPDF({ orientation: "portrait" });
    doc.text("Detail Pesanan Kue Raj", 10, 10);
    const fontSize = 12;
    const x = 10; // X-coordinate
    let y = 20; // Initial Y-coordinate
    doc.setFontSize(fontSize);

    doc.autoTable({
      html: "#my-table",
    });

    doc.save("detail.pdf");
  };
  return (
    <>
      <div className="flex w-full gap-x-5">
        <div className="w-[40%] grid grid-cols-2 gap-y-3 place-content-start gap-x-2">
          <div className="col-span-2">
            <label className="font-medium block" htmlFor="">
              Email
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={email}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Nama Depan
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={nama_depan}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Nama Belakang
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={nama_belakang}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Nomor Handphone
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={nohp}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Tanggal Pemesanan
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={state.transaksi.tanggal_pemesanan}
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="">
            <label className="font-medium block" htmlFor="">
              Provinsi
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={provinsi}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Kota
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={kota}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Kode Pos
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={kodepos}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Alamat Lengkap
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={alamat}
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="">
            <label className="font-medium block" htmlFor="">
              total harga
            </label>

            <p className="border px-1 py-1 font-semibold  rounded-lg w-full">
              <FormatRupiah value={state.transaksi.harga_pesanan} />
            </p>
          </div>

          <div className="">
            <label className="font-medium block" htmlFor="">
              Status Pemesanan :
            </label>

            <select
              defaultValue={transaksi.status_pemesanan}
              onChange={(e) => handleUbahStatus(e)}
              name=""
              className="w-full outline-none border-2 rounded-md"
              id=""
            >
              <option value="Menunggu Kurir">Menunggu</option>
              <option value="Sedang dikirim">Sedang dikirim</option>
              <option value="sampai">sampai</option>
            </select>
          </div>
        </div>
        <div className="w-1/2">
          {!data || loading ? (
            <Skeleton style={`w-full h-56 rounded-md`} />
          ) : (
            <>
              {data && (
                <button
                  onClick={exportPdf}
                  className="py-1 px-2 font-medium text-sm flex items-center gap-x-1 rounded-md btn-primary"
                >
                  Cetak <MdFileDownload />
                </button>
              )}
              <table
                id="my-table"
                className="table-auto w-full font-medium  border-collapse "
              >
                <thead className="border">
                  <tr className="bg-gray-200 capitalize border ">
                    <th className=" px-2 py-1 text-center">Foto</th>
                    <th className=" px-2 py-1 text-center">Produk</th>
                    <th className=" px-2 py-1 text-center">Jumlah</th>
                    <th className=" px-2 py-1 text-center">harga</th>
                  </tr>
                </thead>
                <tbody>
                  {data.data?.map((m) => (
                    <tr key={m.id} className="border">
                      <td className="flex justify-center items-center">
                        <img className="h-12 w-12" src={m.produk.foto} alt="" />
                      </td>
                      <td className=" text-center">{m.produk.nama}</td>
                      <td className=" text-center">{m.jml_pesanan}</td>
                      <td className=" text-center">
                        <FormatRupiah value={m.total_harga} />
                      </td>
                    </tr>
                  ))}
                  {/* <tr className="capitalize border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Jumlah
                    </td>
                    <td colSpan={1} className="text-center ">
                      {data?.jumlah}
                    </td>
                  </tr> */}
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Status Pembayaran :
                    </td>
                    <td colSpan={1} className="text-center ">
                      {state.transaksi.status_pembayaran}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Status Pemesanan :
                    </td>
                    <td colSpan={1} className="text-center ">
                      {state.transaksi.status_pemesanan}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Pembayaran melalui :
                    </td>
                    <td colSpan={1} className="text-center ">
                      {state.transaksi.metode_pembayaran}
                    </td>
                  </tr>

                  <tr className="capitalize  border">
                    <td colSpan={2} className="py-1 px-1 text-left">
                      Total Harga :
                    </td>
                    <td
                      colSpan={2}
                      className="text-center bg-primary text-white"
                    >
                      <FormatRupiah value={state.transaksi.harga_pesanan} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
}
