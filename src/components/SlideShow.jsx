import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "../styleswiper.css";

export default function SlideShow() {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          <img src="/inception.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/shutter-island.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/The_Dark_Knight_Rises.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/the-shape-of-water.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
