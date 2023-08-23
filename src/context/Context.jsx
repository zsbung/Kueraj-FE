import React, { createContext, useState } from "react";
import axiosInstance from "../configs/AxiosInstance";
import { toast } from "react-hot-toast";
import Auth from "../utils/Auth";
export const MyContext = createContext();
export default function Context({ children }) {
  const [cart, setCart] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [image, setImage] = useState("");
  const [trowx, setTrowx] = useState({
    show: false,
    count: 0,
  });
  const [user, setUser] = useState({});

  // const tambah = async (produk, jml, setImage) => {
  //   setCart([...cart, produk]);
  //   await axiosInstance
  //     .post(`keranjang`, {
  //       produk_id: produk.id,
  //       jml_produk: jml,
  //     })
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       setAnimate(true);
  //       setTimeout(() => {
  //         setAnimate(false);
  //       }, 1000);
  //       setTrowx({ count: trowx.count + 1, show: !trowx.show });
  //     })
  //     .catch((err) => toast.error(err.response.data.message))
  //     .finally(setAnimate(false));
  // };

  const handleKeranjang = async (e, produk, jumlah) => {
    e.preventDefault();
    setImage(produk.foto);
    if (Auth.isAuthorization()) {
      await axiosInstance
        .post(`keranjang`, {
          produk_id: produk.id,
          jml_produk: jumlah,
        })
        .then((res) => {
          setAnimate(true);
          setTimeout(() => {
            setAnimate(false);
          }, 1000);
          setTrowx({ count: trowx.count + 1, show: !trowx.show });
        })
        .catch((err) =>
          toast.error(err.response.data.message, { duration: 1000 })
        )
        .finally(setAnimate(false));
    } else {
      toast.error("login terlebih dahulu");
    }
  };
  return (
    <MyContext.Provider
      value={{
        cart,
        setAnimate,
        animate,
        image,
        setTrowx,
        handleKeranjang,
        trowx,
        setUser,
        user,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
