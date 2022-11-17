import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styleswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";

export default function TopRated() {
  const [movies, setMovies] = useState([]);

  async function getLatestMovies() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e53bab22614cda1579762df1ee0a0c4b`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    getLatestMovies();
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-2xl text-rose-700 ml-5 py-10">
        TopRated Movies Movies
      </h2>
      <Swiper
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
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide className="overflow-visible" key={movie.id}>
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
    </div>
  );
}
