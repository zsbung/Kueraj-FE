import React from "react";
import "swiper/css";
import WelcomeUser from "../../components/welcome/WelcomeUser";
import ProdukHome from "./Home/ProdukHome";
import Rekomendasi from "./Home/Rekomendasi";
export default function Home() {
  const animation = {
    initial: {
      y: "20%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.7,
        // ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const childanimation = {
    initial: {
      y: "20%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <div className="min-h-screen pb-32 flex flex-col gap-y-5">
        <WelcomeUser />
        <Rekomendasi />
        <ProdukHome />
      </div>

      {/* <GoToTop /> */}
    </>
  );
}
