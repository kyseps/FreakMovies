import React from "react";
import { baseImgURL, putImage } from "../config";

export default function SlideshowCard({ item }) {
  return (
    <div
      className={`bg-cover h-[500px]`}
      style={{
        backgroundImage: `url(${baseImgURL}/original/${item.backdrop_path})`,
      }}
    >
      <div className="flex items-center  w-full h-full bg-gradient-to-b from-[#000000c7] to-[#000000c7]">
        <div className=" ml-10 flex">
          <img src={putImage(item.poster_path, "w500")} />
        </div>
        <div className="flex flex-col items-start gap-5 ml-3 p-2">
          <h2 className="text-slate-400 text-3xl">{item.title}</h2>
          <p className="text-slate-400 text-lg">{item.overview}</p>
          <span className="text-2xl text-slate-400">
            Rate:
            <span>
              <i className="fa-solid fa-star text-yellow-400"></i>
            </span>
            {item.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
