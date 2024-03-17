import { FormatRupiah } from "@arismun/format-rupiah";
import React from "react";
import {
  FaMoneyCheckAlt,
  FaUserAlt,
  FaUserFriends,
  FaUserTag,
} from "react-icons/fa";
import hi from "../../assets/img/hi.png";
import CardDashboard from "../../components/Card/CardDashboard";
import Auth from "../../utils/Auth";
import { motion } from "framer-motion";
import Fetcher from "../../utils/Fetcher";
import Skeleton from "../../components/loading/Skeleton";
import { MdSell } from "react-icons/md";
export default function Dashboard() {
  const mockupData = [
    {
      name: "T-Shirt",
      total: 8,
      foto: "tshirt.jpg",
      kategori: "Clothing",
      harga: 150000,
      jumlah: 50,
    },
    {
      name: "Jeans",
      total: 5,
      foto: "jeans.jpg",
      kategori: "Clothing",
      harga: 40000,
      jumlah: 30,
    },
    {
      name: "Dress",
      total: 12,
      foto: "dress.jpg",
      kategori: "Clothing",
      harga: 50900,
      jumlah: 20,
    },
    {
      name: "Sweater",
      total: 7,
      foto: "sweater.jpg",
      kategori: "Clothing",
      harga: 350000,
      jumlah: 25,
    },
    {
      name: "Jacket",
      total: 4,
      foto: "jacket.jpg",
      kategori: "Clothing",
      harga: 60000,
      jumlah: 15,
    },
    {
      name: "Shorts",
      total: 9,
      foto: "shorts.jpg",
      kategori: "Clothing",
      harga: 25,
      jumlah: 40,
    },
    {
      name: "Skirt",
      total: 6,
      foto: "skirt.jpg",
      kategori: "Clothing",
      harga: 150000,
      jumlah: 18,
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
                src="https://img.freepik.com/premium-vector/anime-cartoon-character-vector-illustration_648489-34.jpg?w=740"
                alt=""
              />
            </div>
            <div>
              {loading ? (
                <Skeleton style={`h-5 w-72 rounded-mg`} />
              ) : (
                <p className="text-2xl font-bold">Welcome, {data.me}</p>
              )}
              {/* <p className="text-md font-medium">Sign Out</p> */}
            </div>
          </motion.div>
          {/* <div className="flex lg:w-[30%] h-full items-center gap-x-2">
            <img
              src={hi}
              alt="Picture of the author"
              className="h-full w-full "
            />
          </div> */}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-2 mt-4">
        {loading ? (
          [1, 2, 3, 4].map((m) => (
            <Skeleton key={m} style={`w-60 h-32 rounded-lg`} />
          ))
        ) : (
          <>
            <CardDashboard
              icon={<FaUserAlt size={25} />}
              name={"pengguna"}
              total={data?.pengguna}
            />
            <CardDashboard
              icon={<FaMoneyCheckAlt size={25} />}
              name={"pendapatan"}
              total={data?.pendapatan}
            />
            <CardDashboard
              icon={<FaUserTag size={25} />}
              name={"pembeli"}
              total={data?.pembeli}
            />
            <CardDashboard
              icon={<MdSell size={25} />}
              name={"Produk Terjual"}
              total={data?.terjual}
            />
          </>
        )}
      </div>
      {/* <div className="mt-5">
        <p className="font-bold mb-2">
          10 produk yang paling banyak dibeli minggu ini
        </p>
        <table className="table-auto w-full font-medium  border-collapse ">
          <thead className="">
            <tr className="bg-gray-200  ">
              <th className=" px-2 py-2 text-center">No</th>
              <th className=" px-2 py-2 text-center">Nama</th>
              <th className=" px-2 py-2 text-center">Kategori</th>
              <th className=" px-2 py-2 text-center">Harga</th>
              <th className=" px-2 py-2 text-center">jumlah pembelian</th>
            </tr>
          </thead>
          <tbody>
            {mockupData.map((m, index) => (
              <tr className="text-left" key={index}>
                <td className="border px-2 py-2 text-center">{++index}</td>
                <td className="border px-2 w-72 py-2 ">{m.name}</td>
                <td className="border px-2 py-2 ">{m.kategori}</td>
                <td className="border px-2 py-2 ">
                  <FormatRupiah value={m.harga} />
                </td>
                <td className="border px-2 py-2 flex justify-center ">
                  <p className="py-1 px-5 font-bold  text-primary text-center rounded-lg bg-primary/20 ">
                    {m.jumlah}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
