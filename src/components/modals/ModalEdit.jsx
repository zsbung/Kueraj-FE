import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../configs/Firebase";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import Exit from "../Exit";
import { motion } from "framer-motion";
import POST from "../../api/post.api";
export default function ModalEdit({ setModal, data, setFetched, fetched }) {
  const {
    cate_id,
    nama,
    deskripsi,
    foto,
    foto2,
    foto3,
    harga,
    status,
    stok,
    id,
  } = data;
  const [form, setForm] = useState({
    cate_id: cate_id,
    nama: nama,
    deskripsi: deskripsi,
    foto: foto,
    foto2: foto2,
    foto3: foto3,
    harga: harga,
    status: status,
    stok: stok,
  });
  const handleOnchange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: name == "status" ? checked : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    POST.updateProduk(form, id).then((res) => {
      setModal(false);
      setFetched(!fetched);
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
              <label htmlFor="nama" className="block">
                Kategori
              </label>
              <input type="text" className="inputProduk" />
            </div>
            <div>
              <label htmlFor="nama" className="block">
                Nama
              </label>
              <input
                name="nama"
                onChange={handleOnchange}
                type="text"
                value={form.nama}
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
                value={form.harga}
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
                value={form.stok}
                className="inputProduk"
              />
            </div>
            <div>
              <label htmlFor="nama" className="block">
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
                    {form.foto ? (
                      <>
                        <img
                          src={form.foto}
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
                    {form.foto2 ? (
                      <>
                        <img
                          src={form.foto2}
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
                    onChange={handleFoto3}
                    className="z-[10] absolute w-24  h-full opacity-0 cursor-pointer"
                  />
                  <div className=" relative  h-full w-full flex items-center justify-center">
                    {form.foto3 ? (
                      <>
                        <img
                          src={form.foto3}
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
                  value={form.deskripsi}
                  onChange={handleOnchange}
                  className="outline-none border h-44 w-full rounded-lg"
                />
              </div>
              <label htmlFor="nama" className="block">
                Status
              </label>
              <input
                name="status"
                onChange={handleOnchange}
                type="checkbox"
                defaultChecked={form.status}
                className="inputProduk"
              />
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
