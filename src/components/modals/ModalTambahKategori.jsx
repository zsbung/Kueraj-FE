import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsFileEarmarkImageFill } from "react-icons/bs";
import { v4 } from "uuid";
import POST from "../../api/post.api";
import { storage } from "../../configs/Firebase";
import Exit from "../Exit";
import { toast } from "react-hot-toast";
export default function ModalTambahKategori({
  setModal,
  setFetched,
  setMessage,
}) {
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    POST.addKategori(form).then((res) => {
      toast.success(res.data.message);
      setFetched(false);
      setModal(false);
    });
  };

  const handleFoto = async (e) => {
    const imageUpload = e.target.files[0];
    if (!imageUpload) return;
    const storageRef = ref(storage, `kategori/${imageUpload.name + v4()}`);
    uploadBytes(storageRef, imageUpload).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setForm({ ...form, image: url });
      });
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
          className="bg-white p-5 w-[30%] rounded-lg relative"
        >
          <h1 className="text-center font-bold text-lg mb-2">
            Tambah Kategori
          </h1>
          <button onClick={() => setModal(false)}>
            <Exit />
          </button>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-y-2"
          >
            <div>
              <label className=" block" htmlFor="nama">
                Nama
              </label>
              <input
                type="text"
                className="border w-full h-10 px-2 outline-none rounded-lg"
                name="name"
                onChange={handleOnchange}
                placeholder="Masukkan Kategori"
                id="nama"
              />
            </div>
            <label className=" block" htmlFor="foto">
              Foto
            </label>
            <div className="relative  h-44 w-full border py-2   font-semibold rounded-lg ">
              <input
                type="file"
                onChange={handleFoto}
                className="opacity-0 w-full cursor-pointer h-full absolute top-0 bottom-0 left-0 right-0"
              />
              <div className="   h-full w-full  flex items-center justify-center">
                {form.image ? (
                  <>
                    <img
                      src={form.image}
                      className="absolute w-full h-full"
                      alt=""
                    />
                  </>
                ) : (
                  <BsFileEarmarkImageFill size={70} />
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className=" w-1/2 rounded-lg py-1 bg-primary hover:bg-secondary transition-all duration-100 active:scale-95 font-bold text-white"
                type="submit"
              >
                Tambah
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
