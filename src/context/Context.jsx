import React, { createContext, useState } from "react";
export const MyContext = createContext();
export default function Context({ children }) {
  const [trow, setTrow] = useState(false);
  const [cart, setCart] = useState([]);
  const [trowx, setTrowx] = useState({
    show: false,
    count: 0,
  });

  const tambah = (produk) => {
    setTrowx({ count: trowx.count + 1, show: !trowx.show });
    setCart([...cart, produk]);
  };
  return (
    <MyContext.Provider value={{ setTrow, cart, trow, tambah, trowx }}>
      {children}
    </MyContext.Provider>
  );
}
