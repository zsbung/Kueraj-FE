import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Fetcher from "../../../utils/Fetcher";
import Skeleton from "../../../components/loading/Skeleton";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function DetailPesananAdmin() {
  const { id } = useParams();
  const { state } = useLocation();
  const {
    nama,
    email,
    nohp,
    provinsi,
    kota,
    alamat,
    tanggal_pemesanan,
    kodepos,
    status_pembayaran,
    status_pemesanan,
    harga_pesanan,
    metode_pembayaran,
  } = state;

  const { data, loading } = Fetcher(`detailPesananAdmin/${id}`);
  return (
    <>
      <div className="flex w-full gap-x-5">
        <div className="w-[40%] grid grid-cols-2 place-content-start gap-3">
          <div className="">
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
              Nama Lengkap
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={nama}
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
              defaultValue={tanggal_pemesanan}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Status Pemesanan
            </label>
            <p className="border px-1 py-1  rounded-lg w-full">
              {status_pemesanan == 1 ? "Terkirim" : "pending"}
            </p>
          </div>
          <div className="">
            <label className="font-medium block" htmlFor="">
              Metode Pembayaran
            </label>
            <input
              className="border px-1 py-1  rounded-lg w-full"
              disabled
              defaultValue={metode_pembayaran}
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
        </div>
        <div className="w-1/2">
          {!data || loading ? (
            <Skeleton style={`w-full h-56 rounded-md`} />
          ) : (
            <>
              <table className="table-auto w-full font-medium  border-collapse ">
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
                      {status_pembayaran}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Pembayaran melalui :
                    </td>
                    <td colSpan={1} className="text-center ">
                      {metode_pembayaran}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Status Pemesanan :
                    </td>
                    <td colSpan={1} className="text-center ">
                      {status_pemesanan == 1 ? "terkirim" : " diperjalanan"}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={3} className="py-1 px-1 text-left">
                      Total Harga :
                    </td>
                    <td
                      colSpan={1}
                      className="text-center bg-primary text-white"
                    >
                      <FormatRupiah value={harga_pesanan} />
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
