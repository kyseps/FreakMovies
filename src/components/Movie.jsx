import { Spin } from "antd";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, baseImgURL, baseURL, putImage, youTubeURL } from "./config";
import AntLoading from "./Loading/AntLoading";
import NavBar from "./NavBar";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  async function getMovie() {
    try {
      const { data } = await axios.get(
        `${baseURL}/movie/${id}?api_key=e53bab22614cda1579762df1ee0a0c4b&append_to_response=videos,images`
      );
      setMovie(data);
    } catch {
      console.log("invalid something");
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <>
      <NavBar />
      {movie ? (
        <>
          <div
            className={`bg-cover h-[400px]`}
            style={{
              backgroundImage: `url(${baseImgURL}/original/${movie.backdrop_path})`,
            }}
          >
            <div className="flex items-center w-full h-full bg-gradient-to-b from-[#000000c7] to-[#000000c7]">
              <div className=" ml-10 flex">
                <img src={putImage(movie.poster_path, "w300")} />
              </div>
              <div className="flex flex-col gap-5 ml-3 p-2">
                <h2 className="text-slate-400 text-3xl">{movie.title}</h2>
                <p className="text-slate-400 text-lg">{movie.overview}</p>
                <span className="text-2xl text-slate-400">
                  Rate:
                  <span>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </span>
                  {movie.vote_average}
                </span>
              </div>
            </div>
          </div>
          <div className="my-8">
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
                1536: {
                  slidesPerView: 4,
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
              {movie.videos.results.map((video) => {
                return (
                  <SwiperSlide>
                    <iframe
                      className="w-full h-[2/1]"
                      src={`${youTubeURL}/${video.key}`}
                    ></iframe>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      ) : (
        <AntLoading />
      )}
    </>
  );
}
