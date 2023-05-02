import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Card from "../../../components/Card/CardRekomendasi";
import { produk } from "../../../mockup/mockup";
import "swiper/css";
import CardRekomendasi from "../../../components/Card/CardRekomendasi";
export default function () {
  return (
    <div>
      <h1 className="titles mb-3">Rekomendasi</h1>
      <Swiper
        className="relative group"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          1024: {
            spaceBetween: 5,
            slidesPerView: 5,
          },
        }}
        spaceBetween={2}
        slidesPerView={2}
        pagination={true}
        scrollbar={{ draggable: true }}
      >
        <div className="absolute group-hover:opacity-100 lg:opacity-40 transisi  left-0 top-1/2 z-10  -translate-y-1/2">
          <SlidePrevButton />
        </div>
        {produk.map((m, index) => (
          <SwiperSlide key={index} className=" py-1 flex justify-center">
            <CardRekomendasi id={index} produk={m} />
          </SwiperSlide>
        ))}

        <div className="absolute right-0 top-1/2 z-10 group-hover:opacity-100 lg:opacity-40 transisi  -translate-y-1/2">
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <button
      className="lg:text-[40px] text-[30px] text-base1 rounded-full bg-primary "
      onClick={() => swiper.slidePrev()}
    >
      <HiChevronLeft />
    </button>
  );
}
export function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      className="lg:text-[40px] text-[30px] text-base1 rounded-full bg-primary "
      onClick={() => swiper.slideNext()}
    >
      <HiChevronRight />
    </button>
  );
}
