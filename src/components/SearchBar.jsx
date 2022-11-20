import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { apiKey, baseImgURL, baseURL } from "./config";
import MovieSearch from "./Search/MovieSearch";
import PeopleSearch from "./Search/PeopleSearch";
import TvSearch from "./Search/TvSearch";

export default function SearchBar() {
  const { user, logout } = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query) {
        const { data } = await axios.get(
          `${baseURL}/search/multi?api_key=${apiKey}&query=${query}`
        );
        setSearchResult(data.results);
      } else {
        setSearchResult([]);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case "tv":
        return <TvSearch key={item.id} item={item} />;
      case "person":
        return <PeopleSearch key={item.id} item={item} />;
      case "movie":
        return <MovieSearch key={item.id} item={item} />;
    }
  }

  return (
    <section className=" grid grid-cols-12 mt-8 gap-8">
      <section className="col-span-3 col-start-1 ml-7">
        <a
          href="http://127.0.0.1:5173/"
          className=" p-2 text-rose-600 freakFont text-2xl"
        >
          FreakMovies
        </a>
      </section>
      <div className="relative flex flex-col col-span-6 rounded-xl text-lg p-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie,Tvshow,Person ..."
          type="search"
          name=""
          id=""
          className="col-span-6 rounded-xl text-lg p-2"
        />
        <div
          className={`bg-gray-900 rounded-md absolute mt-11 w-11/12 h-52 z-10 bg-opacity-90  transition-all duration-200 text-white px-6 py-2  ${
            searchResult.length && query
              ? "max-h-[300px] overflow-auto"
              : "h-0 overflow-hidden"
          } `}
        >
          <div onClick={() => setSearchResult([])}>
            {searchResult.map((item) => showItem(item))}
          </div>
        </div>
      </div>
      {Object.keys(user).length ? (
        <div className="flex justify-center items-center gap-8 -mr-36 ">
          <img
            src={`${baseImgURL}/w185/${user?.avatar?.tmdb?.avatar_path}`}
            onError={(e) => {
              (e.target.src = "profile-picture.webp"), (e.onError = null);
            }}
            className=" w-9 h-9 rounded-full"
          />
          <div className="text-lg text-slate-50">{user.name || user.username}</div>
          <button
            onClick={logout}
            className=" text-slate-50 text-lg bg-rose-900 py-2 px-5 rounded"
          >
            LogOut
          </button>
        </div>
      ) : (
        <>
          <button
            type="submit"
            className="col-span-1 bg-green-600 hover:bg-green-500 rounded text-slate-50 sm:text-sm lg:text-lg"
          >
            <NavLink to="/login">Login</NavLink>
          </button>
          <button
            type="submit"
            className="col-span-1 rounded bg-rose-800 hover:bg-rose-600 text-lg text-slate-50 sm:text-sm lg:text-lg "
          >
            Signup
          </button>
        </>
      )}
    </section>
  );
}
