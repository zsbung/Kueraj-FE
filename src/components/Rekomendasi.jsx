import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Skeleton from "./loading/Skeleton";
import Fetcher from "../utils/Fetcher";
import Auth from "../utils/Auth";
import CardRekomendasi from "./card/CardRekomendasi";
export default function () {
  const { data, loading, error } = Fetcher(
    `rekomendasiProduk?user_id=${Auth.getId()}`
  );
  return (
    <div>
      <h1 className="titles mb-3">Rekomendasi</h1>
      <div className="flex justify-between gap-x-2">
        {loading ? (
          [1, 2, 3, 4].map((m) => (
            <Skeleton
              key={m}
              style={`w-full lg:w-[16rem] lg:h-[18rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-abu`}
            />
          ))
        ) : (
          <>
            {data?.rekomendasi?.map((m) => (
              <CardRekomendasi key={m.id} produk={m} />
            ))}
          </>
        )}

        {/* {!loading &&
          data?.rekomendasi?.map((m) => (
            <CardRekomendasi key={m.id} produk={m} />
          ))} */}
      </div>
      {/* <Swiper
        className="relative group"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          1024: {
            spaceBetween: 20,
            slidesPerView: 4,
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
        {loading ? (
          [1].map((m) => (
            <Skeleton
              key={m}
              style={`w-full lg:h-[18rem]  h-[17rem] hover:border-[1px] border   rounded-xl overflow-hidden cursor-pointer hover:shadow-md   translinear bg-abu`}
            />
          ))
        ) : (
          <>
            {data?.rekomendasi?.map((m, index) => (
              <SwiperSlide
                key={index}
                className=" py-1 flex justify-center gap-x-4"
              >
                <CardProduk id={index} produk={m} />
              </SwiperSlide>
            ))}
          </>
        )}

        <div className="absolute right-0 top-1/2 z-10 group-hover:opacity-100 lg:opacity-40 transisi  -translate-y-1/2">
          <SlideNextButton />
        </div>
      </Swiper> */}
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
