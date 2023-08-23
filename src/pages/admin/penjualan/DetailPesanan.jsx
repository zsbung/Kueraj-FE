import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Skeleton from "../../../components/loading/Skeleton";
import Fetcher from "../../../utils/Fetcher";

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
    kodepos,
  } = state;

  const { data, loading } = Fetcher(`detailPesananAdmin/${id}`);
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
                      {state.transaksi.status_pembayaran}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={2} className="py-1 px-1 text-left">
                      Pembayaran melalui :
                    </td>
                    <td colSpan={2} className="text-center ">
                      {state.transaksi.metode_pembayaran}
                    </td>
                  </tr>
                  <tr className="capitalize  border">
                    <td colSpan={2} className="py-1 px-1 text-left">
                      Status Pemesanan :
                    </td>
                    <td colSpan={2} className="text-center ">
                      <select
                        defaultValue={state.transaksi.status_pemesanan}
                        onChange={(e) => console.log(e.target.value)}
                        name=""
                        className="w-full outline-none border-2 rounded-md"
                        id=""
                      >
                        <option value="Menunggu Kurir">Menunggu</option>
                        <option value="Menunggu Kurir">Terkirim</option>
                      </select>
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
