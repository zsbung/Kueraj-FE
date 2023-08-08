import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../configs/AxiosInstance";
import { Toaster, toast } from "react-hot-toast";
export const MyContext = createContext();
export default function Context({ children }) {
  const [trow, setTrow] = useState(false);
  const [cart, setCart] = useState([]);
  const [trowx, setTrowx] = useState({
    show: false,
    count: 0,
  });
  const [user, setUser] = useState({});
  const [response, setResponse] = useState("");
  const tambah = async (produk, jml) => {
    setCart([...cart, produk]);
    await axiosInstance
      .post(`keranjang`, {
        produk_id: produk.id,
        jml_produk: jml,
      })
      .then((res) => {
        setResponse(res.data.message);
        setTrowx({ count: trowx.count + 1, show: !trowx.show });
      });
  };
  return (
    <MyContext.Provider
      value={{
        setTrow,
        cart,
        trow,
        setTrowx,
        tambah,
        trowx,
        setUser,
        user,
        response,
        setResponse,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
