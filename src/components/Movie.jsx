import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseImgURL, baseURL } from "./config";
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
      console.log("yoyoyo");
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);

  console.log(movie);
  return (
    <>
      <NavBar />
      <div>
        {movie ? (
          <>
            <h2>{movie.original_title}</h2>
            <img
              src={`${baseImgURL}/original/${movie.backdrop_path}`}
              alt=""
              className="my-8"
            />
            <div className="flex items-center justify-center flex-wrap gap-3">
              {movie.videos.results.map((video) => {
                return (
                  <div>
                    <iframe
                      width="420"
                      height="315"
                      src={`https://www.youtube.com/embed/${video.key}`}
                    ></iframe>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h3>Loading....</h3>
        )}
      </div>
    </>
  );
}
