import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styleswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { Segmented } from "antd";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [segmentValue, setSegmentValue] = useState("Streaming");

  const [bg, setBg] = useState();

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
    <>
      <div className="flex gap-10 items-center mt-8 bg-slate-700">
        <h2 className="text-2xl text-rose-700 ml-5 py-4">Top Rated Shows</h2>
        <Segmented
          className="rounded-xl bg-slate-800"
          onChange={(e) => setSegmentValue(e)}
          value={segmentValue}
          options={[
            {
              label: <div>Streaming</div>,
              value: "Streaming",
            },
            {
              label: <div>On TV</div>,
              value: "On TV",
            },
            {
              label: <div>For Rent</div>,
              value: "For Rent",
            },
            {
              label: <div>In Theaters</div>,
              value: "In Theaters",
            },
          ]}
        />
      </div>
      <div
        className="py-24"
        style={{
          backgroundImage: `url(${baseImgURL}/original/${bg})`,
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
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
              <SwiperSlide
                onMouseOver={() => setBg(movie.backdrop_path)}
                className="overflow-visible"
                key={movie.id}
              >
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
    </>
  );
}
