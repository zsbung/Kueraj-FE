import { FormatRupiah } from "@arismun/format-rupiah";
import React, { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axiosInstance from "../../../configs/AxiosInstance";
import ModalHapus from "../../../components/ModalHapus";
import { Toaster, toast } from "react-hot-toast";
export default function CardKeranjang({ cart, setFetched }) {
  const [count, setCount] = useState(cart.jml_produk);
  const [show, setShow] = useState({
    modal: false,
    data: {},
  });
  const [message, setMessage] = useState("");

  const deleteKeranjang = async (e, id) => {
    e.preventDefault();
    await axiosInstance.delete(`keranjang?id=${id}`).then((res) => {
      setFetched(!fetched);
    });
  };

  useEffect(() => {
    if (message !== "") {
      toast.success(message);
      setMessage("");
    }
  }, [message]);
  return (
    <>
      <Toaster />
      {show.modal && (
        <ModalHapus
          setMessage={setMessage}
          datas={show.data}
          setModal={setShow}
          setFetched={setFetched}
        />
      )}
      <div className="flex border p-1 px-2">
        <div className="w-full  grid place-items     gap-x-5   rounded-lg grid-cols-12">
          <div className="lg:col-span-2 col-span-3 flex ">
            <img className="h-[5rem]" src={cart.produk.foto} alt="" />
          </div>
          <div className="lg:col-span-6 order-3  lg:order-none col-span-12 text-[14px] lg:text-[18px]  grid place-content-cente">
            <p className="font-semibold">{cart.produk.nama}</p>
            <p className="text-sm">Jumlah : {cart.jml_produk}</p>
            <p className="text-[15px]">
              <FormatRupiah value={cart.produk.harga * cart.jml_produk} />{" "}
            </p>
          </div>
        </div>
        <div
          onClick={() =>
            setShow({
              modal: !show.modal,
              data: { item: "keranjang", id: cart.id },
            })
          }
          className="col-span-2  lg:col-span-1  flex gap-x-2 justify-center items-center  cursor-pointer "
        >
          <RiDeleteBin5Fill className="text-[25px] hover:text-primary" />
        </div>
      </div>
    </>
  );
}
