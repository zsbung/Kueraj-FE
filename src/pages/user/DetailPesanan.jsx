import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Fetcher from "../../utils/Fetcher";
import ModalRating from "../../components/modals/ModalRating";
import { Toaster, toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

export default function DetailPesanan() {
  const { id } = useParams();
  const { state } = useLocation();
  const [show, setShow] = useState({
    modal: false,
    data: {},
  });
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
  const [message, setMessage] = useState("");
  const { data, loading } = Fetcher(`detailPesananUser/${id}`);

  //   useEffect(() => {
  //     if (message !== "") {
  //       toast.success(message);
  //       setMessage("");
  //     }
  //   }, [message]);
  return (
    <>
      <Toaster />
      {show.modal && (
        <ModalRating
          setMessage={setMessage}
          data={show.data}
          setModal={setShow}
        />
      )}
      <div className="min-h-screen">
        <h1 className="titles text-center my-5">Detail Pesanan</h1>
        <div className="flex gap-x-3 justify-center w-full">
          <div className="w-[40%] grid grid-cols-2 gap-y-3 place-content-start gap-x-2">
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
                defaultValue={tanggal_pemesanan}
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
            <div className="">
              <label className="font-medium block" htmlFor="">
                Status Pemesanan
              </label>
              <input
                className="border px-1 py-1  rounded-lg w-full"
                disabled
                defaultValue={status_pemesanan == 1 ? "terkirim" : "menunggu"}
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
                defaultValue={metode_pembayaran}
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
                defaultValue={status_pembayaran}
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
                <FormatRupiah value={harga_pesanan} />
              </p>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-y-2 ">
            {data && !loading
              ? data?.data?.map((m) => (
                  <div key={m.id} className="border flex justify-between">
                    <div className="flex gap-x-2 ">
                      <img className="h-[6rem]  " src={m.produk.foto} alt="" />
                      <div className="flex flex-col">
                        <h1 className="font-semibold text-md">
                          {m.produk.nama}
                        </h1>
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
              : "loading"}
          </div>
        </div>
      </div>
    </>
  );
}
