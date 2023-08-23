import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { v4 } from "uuid";
import POST from "../../api/post.api";
import { storage } from "../../configs/Firebase";
import Fetcher from "../../utils/Fetcher";
import Exit from "../Exit";
export default function ModalTambahProduk({
  setMessage,
  setModal,
  setFetched,
}) {
  const [form, setForm] = useState({
    kategori_id: 1,
    nama: "",
    deskripsi: "",
    foto: "",
    foto2: "",
    foto3: "",
    harga: 50000,
    stok: 100,
    jenis: "pria",
    status: 1,
    ukuran_S: 1,
    ukuran_L: 1,
    ukuran_XL: 1,
    ukuran_M: 1,
  });
  const { data, loading, error } = Fetcher("kategori");

  const handleOnchange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: name == "status" ? checked : type == "checkbox" ? checked : value,
      // [name]: name == "status" ? checked : type == "checkbox" ? checked : value,
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
    POST.addProduk(form).then((res) => {
      setMessage(res.data.message);
      setFetched(false);
      setModal(false);
    });
  };
  return (
    <>
      <div className="w-full h-full flex justify-center items-center  fixed bg-black/10 backdrop-blur-sm z-[50] top-0 left-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ scale: 0 }}
          className="bg-white p-5  h-[90%] w-[80%] rounded-lg relative"
        >
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
                  <label htmlFor="nama" className="block capitalize">
                    Kategori
                  </label>
                  <select
                    className="w-full cursor-pointer h-9 outline-none border rounded-lg"
                    name="kategori"
                    id=""
                  >
                    {data?.data?.map((kate) => (
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
                  <label htmlFor="nama" className="block capitalize">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    onChange={handleOnchange}
                    className="inputProduk"
                  />
                </div>
                <div>
                  <label htmlFor="nama" className="block capitalize">
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
                  <label htmlFor="nama" className="block capitalize">
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
                      onChange={handleOnchange}
                      className="outline-none border h-44 w-full rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="nama" className="block">
                      Jenis
                    </label>
                    <select
                      name="jenis"
                      onChange={handleOnchange}
                      className="w-56 h-10 rounded-md outline-none  border"
                      id=""
                    >
                      <option value="pria">Pria</option>
                      <option value="wanita">Wanita</option>
                    </select>
                  </div>
                  <div className="flex gap-x-1">
                    <label htmlFor="nama" className="block">
                      Status
                    </label>
                    <input
                      name="status"
                      onChange={handleOnchange}
                      type="checkbox"
                      defaultChecked={true}
                      className=""
                    />
                  </div>

                  <div className="">
                    <label htmlFor="nama" className="block">
                      Ukuran
                    </label>
                    <div className="flex gap-x-2">
                      <div className="flex gap-x-[2px]">
                        S
                        <input
                          name="ukuran_S"
                          onChange={handleOnchange}
                          type="checkbox"
                          defaultChecked={true}
                          className=""
                        />
                      </div>
                      <div className="flex gap-x-[2px]">
                        M
                        <input
                          name="ukuran_M"
                          onChange={handleOnchange}
                          type="checkbox"
                          defaultChecked={true}
                          className=""
                        />
                      </div>
                      <div className="flex gap-x-[2px]">
                        L
                        <input
                          name="ukuran_L"
                          onChange={handleOnchange}
                          type="checkbox"
                          defaultChecked={true}
                          className=""
                        />
                      </div>
                      <div className="flex gap-x-[2px]">
                        XL
                        <input
                          name="ukuran_XL"
                          onChange={handleOnchange}
                          type="checkbox"
                          defaultChecked={true}
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn w-1/2 rounded-lg translinear py-2 text-lg mt-5 ">
              Tambah
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
