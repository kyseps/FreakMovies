import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";

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
    <section className="my-8">
      <h2 className="text-2xl text-rose-700 ml-5 py-4">Popular Movies</h2>
      <Swiper
        className="overflow-visible"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
        navigation={false}
        modules={[Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <NavLink to={`/movie/${movie.id}`}>
                <MovieCard
                  img={putImage(movie.poster_path)}
                  title={movie.title}
                  rate={movie.vote_average}
                />
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
