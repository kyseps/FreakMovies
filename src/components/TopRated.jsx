import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styleswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
export default function TopRated() {
  const [movies, setMovies] = useState([]);

  async function getLatestMovies() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e53bab22614cda1579762df1ee0a0c4b`
    );
    setMovies(data.results);
  }
  console.log(movies);

  useEffect(() => {
    getLatestMovies();
  }, []);
  return (
    <>
      <h2 className="text-2xl text-rose-700 py-10">TopRated Movies Movies</h2>
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
                  <p className="text-rose-50">{item.original_title}</p>
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
