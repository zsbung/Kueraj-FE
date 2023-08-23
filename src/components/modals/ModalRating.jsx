import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import axiosInstance from "../../configs/AxiosInstance";
import Exit from "../Exit";
export default function ModalRating({ setModal, data }) {
  const [rating, setRating] = useState(0);
  const [komentar, setKomentar] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("rating", {
        pemesan_id: data.pemesanId,
        produk_id: data.produkId,
        rating: rating,
        komentar: komentar,
      })
      .then((res) => {
        toast.success(res.data.message + " " + data.namaProduk);
        setModal(false);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center  fixed bg-black/10 backdrop-blur-sm z-[50] top-0 left-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ scale: 0 }}
          className="bg-white p-5 lg:w-[30%] rounded-lg relative"
        >
          <h1 className="text-center font-bold text-lg ">Rating</h1>

          <button onClick={() => setModal(false)}>
            <Exit />
          </button>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="flex flex-col items-center gap-y-2">
              <div className="flex gap-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= rating
                        ? "text-yellow-500 cursor-pointer"
                        : "text-black"
                    }
                    onClick={() => handleRatingChange(star)}
                  >
                    <FaStar />
                  </span>
                ))}
              </div>
              <textarea
                className="outline-none px-1 border rounded-md w-full"
                name=""
                id=""
                onChange={(e) => setKomentar(e.target.value)}
                cols="35"
                rows="3"
              ></textarea>

              <button className="btn px-2 py-1 rounded-md">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
