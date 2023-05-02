import React, { useState } from "react";
import getDatas from "../../hooks/getDatas";
import Get from "../../api/get.api";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../configs/Firebase";
import { useNavigate } from "react-router-dom";
import POST from "../../api/post.api";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Exit from "../Exit";
export default function ModalTambahProduk({ setModal }) {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    cate_id: 1,
    nama: "produk1",
    deskripsi: "deskripsi1",
    foto: "",
    foto2: "",
    foto3: "",
    harga: 10000,
    status: true,
    stok: 5,
  });
  const { data } = getDatas(Get.kategori);

  const handleOnchange = (e) => {
    const { name, value, checked } = e.target;
    setForm({
      ...form,
      [name]: name == "status" ? checked : value,
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
    POST.addProduk(form).then((res) => setModal(false));
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="w-full h-full flex justify-center items-center  fixed bg-black/10 backdrop-blur-sm z-[50] top-0 left-0"
      >
        <div className="bg-white p-5  h-[90%] w-[80%] rounded-lg relative">
          <h1 className="text-center font-bold text-lg mb-2">Tambah Produk</h1>
          <button onClick={() => setModal(false)}>
            <Exit />
          </button>
          <form onSubmit={handleSubmit} action="">
            <div className="grid gap-x-10 grid-cols-2 ">
              <div
                className="flex  flex-col gap-y-2 
        "
              >
                <div>
                  <label htmlFor="nama" className="block">
                    Kategori
                  </label>
                  <select
                    className="w-full cursor-pointer h-9 outline-none border rounded-lg"
                    name="kategori"
                    id=""
                  >
                    {data?.data?.data.map((kate) => (
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
                      name="deskripsi"
                      onChange={handleOnchange}
                      type="text"
                      className="outline-none border h-44 w-full rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-x-3  ">
                    <label htmlFor="nama" className="block">
                      Status
                    </label>
                    <input
                      name="status"
                      onChange={handleOnchange}
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer bg-black"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn w-1/2 rounded-lg translinear py-2 text-lg mt-5 ">
              Tambah
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
