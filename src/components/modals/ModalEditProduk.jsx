import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { v4 } from "uuid";
import POST from "../../api/post.api";
import { storage } from "../../configs/Firebase";
import Fetcher from "../../utils/Fetcher";
import Exit from "../Exit";
import { toast } from "react-hot-toast";
export default function ModalEditProduk({ setModal, data, setFetched }) {
  const {
    kategori_id,
    nama,
    deskripsi,
    foto,
    foto2,
    foto3,
    harga,
    status,
    stok,
    ukuran_S,
    ukuran_M,
    ukuran_L,
    ukuran_XL,
    id,
  } = data;
  const { data: kategoris } = Fetcher("kategori");

  const [form, setForm] = useState({
    kategori_id: data?.kategori_id,
    nama: data?.nama,
    deskripsi: data?.deskripsi,
    jenis: data?.jenis,
    foto: data?.foto,
    foto2: data?.foto2,
    foto3: data?.foto3,
    harga: data?.harga,
    stok: data?.stok,
    status: data?.status,
    ukuran_S: true,
    ukuran_L: true,
    ukuran_XL: true,
    ukuran_M: true,
  });
  const handleOnchange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]:
        name == "status"
          ? checked
          : type == "checkbox"
          ? checked
          : type == "number"
          ? Number(value)
          : name == "kategori_id"
          ? Number(value)
          : value,
    });
  };

  const handleFoto = async (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `produk/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto: url });
      });
    });
  };
  const handleFoto2 = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `produk/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto2: url });
      });
    });
  };
  const handleFoto3 = (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `produk/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, foto3: url });
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    POST.updateProduk(form, id).then((res) => {
      toast.success(res.data.message);
      setModal(false);
      setFetched(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="w-full h-full flex justify-center items-center  fixed bg-black/10 backdrop-blur-sm z-[50] top-0 left-0"
    >
      <div className="bg-white p-5  h-[90%] w-[80%] rounded-lg relative">
        <h1 className="text-center font-bold text-lg mb-2">Edit Produk</h1>
        <button onClick={() => setModal(false)}>
          <Exit />
        </button>
        <form
          action=""
          className="grid gap-x-10 grid-cols-2 "
          onSubmit={handleSubmit}
        >
          <div
            className="flex  flex-col gap-y-2 
      "
          >
            <div>
              <label htmlFor="nama" className="block capitalize">
                Kategori
              </label>
              <select
                className="w-full cursor-pointer h-9 outline-none border rounded-lg"
                name="kategori_id"
                defaultValue={kategori_id}
                id=""
                onChange={handleOnchange}
              >
                {kategoris?.data?.map((kate) => (
                  <option
                    className="borders py-5 cursor-pointer"
                    key={kate.id}
                    value={kate.id}
                  >
                    {kate.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="nama" className="block">
                Nama
              </label>
              <input
                name="nama"
                onChange={handleOnchange}
                type="text"
                defaultValue={nama}
                className="inputProduk"
              />
            </div>
            <div>
              <label htmlFor="nama" className="block">
                harga
              </label>
              <input
                name="harga"
                onChange={handleOnchange}
                type="number"
                defaultValue={harga}
                className="inputProduk"
              />
            </div>
            <div>
              <label htmlFor="nama" className="block">
                stok
              </label>
              <input
                name="stok"
                onChange={handleOnchange}
                type="number"
                defaultValue={stok}
                className="inputProduk"
              />
            </div>
            <div>
              <label htmlFor="nama" className="block capitalize">
                foto
              </label>
              <div className="flex gap-x-2 ">
                <div className="  w-24 h-24 border relative cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFoto}
                    className="z-[10] absolute w-24  h-full opacity-0 cursor-pointer"
                  />
                  <div className=" relative  h-full w-full flex items-center justify-center">
                    {foto ? (
                      <>
                        <img
                          src={foto}
                          className="absolute w-full h-full"
                          alt=""
                        />
                      </>
                    ) : (
                      <BsFileEarmarkImageFill size={40} />
                    )}
                  </div>
                </div>
                <div className="  w-24 h-24 border relative cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFoto2}
                    className="z-[10] absolute w-24  h-full opacity-0 cursor-pointer"
                  />
                  <div className=" relative  h-full w-full flex items-center justify-center">
                    <>
                      <img
                        src={foto2}
                        className="absolute w-full h-full"
                        alt=""
                      />
                    </>
                  </div>
                </div>
                <div className="  w-24 h-24 border relative cursor-pointer">
                  <input
                    type="file"
                    onChange={handleFoto3}
                    className="z-[10] absolute w-24  h-full opacity-0 cursor-pointer"
                  />
                  <div className=" relative  h-full w-full flex items-center justify-center">
                    {foto3 !== "" ? (
                      <>
                        <img
                          src={foto3}
                          className="absolute w-full h-full"
                          alt=""
                        />
                      </>
                    ) : (
                      <BsFileEarmarkImageFill size={40} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex  flex-col gap-y-2  
      "
          >
            <div>
              <div>
                <label htmlFor="nama" className="block">
                  Deskripsi
                </label>
                <textarea
                  type="text"
                  name="deskripsi"
                  defaultValue={deskripsi}
                  onChange={handleOnchange}
                  className="outline-none border h-44 w-full rounded-lg"
                />
              </div>
             
              <div className="flex gap-x-1">
                <label htmlFor="nama" className="block">
                  Status
                </label>
                <input
                  name="status"
                  onChange={handleOnchange}
                  type="checkbox"
                  defaultChecked={status}
                  className=""
                />
              </div>

              
            </div>
          </div>
          <button className="btn w-1/2 rounded-lg translinear py-2 text-lg mt-5 ">
            simpan
          </button>
        </form>
      </div>
    </motion.div>
  );
}
