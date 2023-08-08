import { easeInOut, motion } from "framer-motion";
import React from "react";
import Card from "../../components/Card/CardRekomendasi";
import { produk } from "../../mockup/mockup";
import GoToTop from "../../helpers/GoToTop";
import Kategoris from "./Home/Kategoris";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import Rekomendasi from "./Home/Rekomendasi";
import img from "../../assets/img/home.png";
import WelcomeUser from "../../components/welcome/WelcomeUser";
import LayoutAuth from "../../Auth/LayoutAuth";
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
        <Kategoris />
      </div>

      {/* <GoToTop /> */}
    </>
  );
}
