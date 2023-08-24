import React from "react";
import "swiper/css";
import WelcomeUser from "../../components/welcome/WelcomeUser";
import ProdukHome from "../../components/ProdukHome";
import Rekomendasi from "../../components/Rekomendasi";
import GoToTop from "../../helpers/GoToTop";
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
      <GoToTop />
      <div className="min-h-screen pb-12 flex flex-col gap-y-5">
        <WelcomeUser />
        <Rekomendasi />
        <ProdukHome />
      </div>

      {/* <GoToTop /> */}
    </>
  );
}
