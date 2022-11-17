import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styleswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";

export default function SliderMain() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await axios.get(
      `${baseURL}/movie/popular?api_key=${apiKey}`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="my-10 px-5 w-5/5 border-y-2">
      <h2 className="text-2xl text-rose-700 py-10">Popular Movies</h2>
      <Swiper
        navigation={false}
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay
        className="swiper1 my-10"
      >
        {movies.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="bg-rose-900 rounded-xl flex flex-col justify-start"
            >
              <NavLink to={`/movie/${item.id}`}>
                <div>
                  <img className="max-h-80" src={putImage(item.poster_path)} />
                  <p className="text-rose-50">{item.title}</p>
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
