import React, { useEffect } from "react";
import axiosInstance from "../../configs/AxiosInstance";
import { FormatRupiah } from "@arismun/format-rupiah";
import Fetcher from "../../utils/Fetcher";
import { useNavigate } from "react-router-dom";
import LoadingTable from "../../components/loading/LoadingTable";
import Skeleton from "../../components/loading/Skeleton";

export default function History() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axiosInstance.get("history").then((res) => setData(res.data));
  // }, []);
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
                  <tr key={m.id} className="border">
                    <td className=" text-center">{m?.tanggal_pemesanan}</td>
                    <td className=" text-center">{m.nama}</td>
                    <td className=" text-center">
                      {m.status_pembayaran == 1 ? "berhasil" : "gagal"}
                    </td>
                    <td className=" text-center">BRI</td>
                    <td className=" text-center">
                      {m.status_pemesanan == 1 ? "terkirim" : "gagal"}
                    </td>
                    <td className=" text-center">
                      <FormatRupiah value={m.harga_pesanan} />
                    </td>
                    <td className=" text-center flex justify-center">
                      <button
                        onClick={() =>
                          navigate(`/detail-pesanan/${m.id}`, { state: m })
                        }
                        className="btn py-1 px-2  rounded-md"
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
