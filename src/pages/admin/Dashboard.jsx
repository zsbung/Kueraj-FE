import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import hi from "../../assets/img/hi.png";
import CardDashboard from "../../components/Card/CardDashboard";
import Auth from "../../utils/Auth";
import { motion } from "framer-motion";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../../components/loading/Skeleton";
export default function Dashboard() {
  const cards = [
    {
      name: "admin",
      total: 8,
    },
    {
      name: "pengguna",
      total: 10000000,
    },
    {
      name: "pembeli",
      total: 900,
    },
    {
      name: "pendapatan",
      total: <FormatRupiah value={1000000} />,
    },
  ];

  const { data, loading, error } = Fetcher("dashboard");

  return (
    <>
      <div className="flex  justify-center  gap-x-2">
        <div className="w-full  h-40 bg-white shadow-md border flex px-10 rounded-2xl py-1 justify-between items-center gap-x-2">
          <motion.div
            initial={{ opacity: 0, y: "-30%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex lg:w-[70%] items-center gap-x-2"
          >
            <div className="w-14 h-14 border rounded-full overflow-hidden">
              <img
                className="h-full w-full"
                src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>
            <div>
              {loading ? (
                <Skeleton style={`h-5 w-72 rounded-mg`} />
              ) : (
                <p className="text-2xl font-bold">Welcome, {data.me}</p>
              )}
              <p className="text-md font-medium">Sign Out</p>
            </div>
          </motion.div>
          <div className="flex lg:w-[30%] h-full items-center gap-x-2">
            <img
              src={hi}
              alt="Picture of the author"
              className="h-full w-full "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-2 mt-4">
        {/* {data.map((card, index) => (
          <CardDashboard key={index} total={card.total} name={card.name} />
        ))} */}
        {loading ? (
          [1, 2, 3, 4].map((m) => (
            <Skeleton key={m} style={`w-60 h-32 rounded-lg`} />
          ))
        ) : (
          <>
            <CardDashboard name={"pengguna"} total={data.pengguna} />
            <CardDashboard name={"pendapatan"} total={data.pendapatan} />
            <CardDashboard name={"pembeli"} total={data.pembeli} />
            <CardDashboard name={"terjual"} total={data.terjual} />
          </>
        )}
      </div>
      <div className="mt-5">
        <p className="font-bold mb-2">
          10 produk yang paling banyak dibeli minggu ini
        </p>
        <table className="table-auto w-full font-medium  border-collapse ">
          <thead className="">
            <tr className="bg-gray-200  ">
              <th className=" px-2 py-2 text-center">No</th>
              <th className=" px-2 py-2 text-center">Produk</th>
              <th className=" px-2 py-2 text-center">Nama</th>
              <th className=" px-2 py-2 text-center">Kategori</th>
              <th className=" px-2 py-2 text-center">Harga</th>
              <th className=" px-2 py-2 text-center">jumlah pembelian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-2 text-center">1</td>
              <td className="border px-2 py-2 text-center">foto</td>
              <td className="border px-2 py-2 text-center">produk1</td>
              <td className="border px-2 py-2 text-center">kemeja</td>
              <td className="border px-2 py-2 text-center">
                <FormatRupiah value={20000} />
              </td>
              <td className="border px-2 py-2 flex justify-center ">
                <p className="py-1 px-5 font-bold  text-primary text-center rounded-lg bg-primary/20 ">
                  10
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
