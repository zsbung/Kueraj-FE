import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import ModalRating from "../../components/modals/ModalRating";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../../components/loading/Skeleton";

export default function DetailPesanan() {
  const { id } = useParams();
  const { state } = useLocation();
  const [show, setShow] = useState({
    modal: false,
    data: {},
  });
  const {
    nama_depan,
    nama_belakang,
    email,
    nohp,
    provinsi,
    kota,
    alamat,
    catatan,
    kodepos,
  } = state;
  const { data, loading } = Fetcher(`detailPesananUser/${id}`);
  return (
    <>
      <Toaster />
      {show.modal && <ModalRating data={show.data} setModal={setShow} />}
      <div className="min-h-screen">
        <h1 className="titles text-center my-5">Detail Pesanan</h1>
        <div className="flex flex-col-reverse lg:flex-row   gap-x-3 justify-center w-full">
          <div className="lg:w-[40%] grid grid-cols-2 gap-y-3 place-content-start gap-x-2">
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
                Status Pemesanan
              </label>
              <input
                className="border px-1 py-1  rounded-lg w-full"
                disabled
                defaultValue={state.transaksi == 1 ? "terkirim" : "menunggu"}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="">
              <label className="font-medium block" htmlFor="">
                Metode Pembayaran
              </label>
              <input
                className="border px-1 py-1  rounded-lg w-full"
                disabled
                defaultValue={state.transaksi.metode_pembayaran}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="">
              <label className="font-medium block" htmlFor="">
                Status Pembayaran
              </label>
              <input
                className="border px-1 py-1  rounded-lg w-full"
                disabled
                defaultValue={state.transaksi.status_pembayaran}
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
            <div className="col-span-2">
              <label className="font-medium block" htmlFor="">
                Catatan
              </label>
              <textarea
                className="border px-1 py-1  rounded-lg w-full"
                disabled
                defaultValue={catatan}
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col gap-y-2 ">
            {data && !loading ? (
              data?.data?.map((m) => (
                <div key={m.id} className="border flex justify-between">
                  <div className="flex gap-x-2 ">
                    <img
                      className=" lg:w-[20%] w-[30%] "
                      src={m.produk.foto}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <Link
                        to={`/produk/${m.produk_id}`}
                        className="font-semibold text-md"
                      >
                        {m.produk.nama}
                      </Link>
                      <p className="opacity-95 text-sm">
                        jumlah : {m.jml_pesanan}
                      </p>
                      <div className="py-1">
                        <button
                          onClick={() =>
                            setShow({
                              modal: !show.modal,
                              data: {
                                produkId: m.produk.id,
                                pemesanId: m.pemesan_id,
                                namaProduk: m.produk.nama,
                              },
                            })
                          }
                          className="btn px-[3px] text-sm py-[2px] rounded-md"
                        >
                          Rating
                        </button>
                      </div>
                      <p className="text-sm">{m?.produk?.rating?.komentar}</p>
                    </div>
                  </div>
                  <div className="flex gap-x-2 flex-col justify-end  items-end px-2   ">
                    <div className="flex gap-x-[1px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= m.produk.rating
                              ? "text-yellow-500 cursor-pointer"
                              : "text-black"
                          }
                        >
                          <FaStar size={10} />
                        </span>
                      ))}
                    </div>
                    <p className="">
                      <FormatRupiah value={m.total_harga} />
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <>
                {[1, 2, 3].map((m) => (
                  <Skeleton key={m} style={`w-full h-20`} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
