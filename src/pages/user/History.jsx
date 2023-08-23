import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../components/loading/Skeleton";
import Fetcher from "../../utils/Fetcher";

export default function History() {
  let navigate = useNavigate();
  const { data, loading, error } = Fetcher("history");
  return (
    <>
      <div className="min-h-screen">
        <h1 className="titles text-center my-5">Riwayat Belanja</h1>
        <div>
          <table className="table-auto w-full font-medium  border-collapse ">
            <thead className="border">
              <tr className="bg-gray-200 capitalize border ">
                <th className=" px-2 py-2 w-44 text-center">
                  Tanggal Pemesanan
                </th>
                <th className=" px-2 py-2 text-center">Nama</th>
                <th className=" px-2 py-2 text-center">Status Pembayaran</th>
                <th className=" px-2 py-2 text-center">Metode Pembayaran</th>
                <th className=" px-2 py-2 text-center">Status Pesanan</th>
                <th className=" px-2 py-2 text-center">Harga</th>
                <th className=" px-2 py-2 text-center">Detail</th>
              </tr>
            </thead>
            <tbody>
              {!data || loading ? (
                <>
                  {[1, 2, 3, 4, 5, 6].map((m) => (
                    <tr key={m}>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                      <td>
                        <Skeleton style={"w-full h-8"} />
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                data?.data?.map((m) => (
                  <tr key={m.id} className="border ">
                    <td className="text-center">
                      {m?.transaksi?.tanggal_pemesanan}
                    </td>
                    <td className=" text-center">
                      {m.nama_depan} {m.nama_belakang}
                    </td>
                    <td className=" text-center capitalize flex justify-center">
                      {m.transaksi?.status_pembayaran == "pending" ? (
                        <button
                          className="hover:underline text-red-700 "
                          onClick={() => {
                            const screenWidth = window.screen.width;
                            const screenHeight = window.screen.height;
                            const windowWidth = 400; // Desired window width
                            const windowHeight = 550; // Desired window height
                            const left = (screenWidth - windowWidth) / 2;
                            const top = (screenHeight - windowHeight) / 2;
                            window.open(
                              `${m.transaksi?.url_midtrans}`,
                              null,
                              `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`
                            );
                            setTimeout(() => {
                              navigate("/");
                            }, 1000);
                          }}
                        >
                          Menunggu Pembayaran
                        </button>
                      ) : (
                        m.transaksi?.status_pembayaran
                      )}
                    </td>
                    <td className=" text-center">
                      {m?.transaksi?.metode_pembayaran}
                    </td>
                    <td className=" text-center">
                      {m.transaksi?.status_pemesanan}
                    </td>
                    <td className=" text-center">
                      <FormatRupiah value={m.transaksi?.harga_pesanan} />
                    </td>
                    <td className="  h-full  flex flex-col justify-center px-1 py-2">
                      <button
                        onClick={() =>
                          navigate(`/detail-pesanan/${m.id}`, { state: m })
                        }
                        className=" py-1 px-2 btn rounded-md  h-full"
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
