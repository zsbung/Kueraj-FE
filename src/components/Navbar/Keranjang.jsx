import { motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { IoIosCart } from "react-icons/io";
import axiosInstance from "../../configs/AxiosInstance";
import { MyContext } from "../../context/Context";
export default function Keranjang() {
  const { trowx, setTrowx } = useContext(MyContext);
  const animation = useAnimation();
  const cartAnimation = useAnimation();

  useEffect(() => {
    axiosInstance
      .get("jmlkeranjang")
      .then((res) => setTrowx({ count: res.data.jml }));
  }, []);

  useEffect(() => {
    if (trowx && trowx.count !== 0 && trowx.count !== trowx.count + 1) {
      animation.start({
        scale: [0, 1.4, 1],
        top: ["-20px", "-14px", "-12px"],
        left: ["-10px", "20px"],
        transitionEnd: {
          scale: 0,
          left: "-10px",
          bottom: "-10px",
        },
      });
      cartAnimation.start({
        scale: [0, 0, 1],
      });
    }
  }, [trowx.count]);
  return (
    <>
      <div className="transisi duration-500 ease-in-out group  relative   cursor-pointer">
        <motion.span
          initial={{ scale: 1 }}
          animate={cartAnimation}
          transition={{ delay: 0.1 }}
          exit={{}}
          className="absolute left-5 z-10 -top-3  text-[10px] text-white flex items-center justify-center h-[15px] w-[15px] rounded-full bg-primary"
        >
          {trowx && trowx.count}
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          animate={animation}
          transition={{ duration: 0.8 }}
          exit={{}}
          className="absolute  z-0 text-[10px] text-white flex items-center justify-center h-[15px] w-[15px] rounded-full bg-black"
        >
          +1
        </motion.span>
        <div className="flex gap-x-1  items-center group-hover:text-primary">
          <IoIosCart className="text-2xl " />
          Keranjang
        </div>

        {/* <div className="absolute right-0 lg:-right-24 mt-1  w-[20rem] flex flex-col   bg-base shadow-lg rounded-xl h-0 group-hover:h-40   overflow-hidden text-sm  z-[10] transition-all duration-500 ease-in-out ">
          {cart &&
            cart.map((m, index) => (
              <div
                key={index}
                className="flex justify-around gap-2  p-2 cursor-pointer  hover:bg-base1 hover:underline"
              >
                <img className="w-[20%]" src="" alt="" />
                <p>{m.nama}</p>
                <p>
                  {" "}
                  <FormatRupiah value={m.harga} />{" "}
                </p>
              </div>
            ))}
          <p className="text-sm  p-2 hover:underline text-text text-center w-full">
            Lihat semua...
          </p>
        </div> */}
      </div>
    </>
  );
}
