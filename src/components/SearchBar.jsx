import React from "react";

export default function SearchBar() {
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
      <input
        placeholder="Search for a movie,Tvshow,Person ..."
        type="search"
        name=""
        id=""
        className="col-span-6 sm:p-1 rounded-xl text-lg p-2 focus:scale-y-110"
      />
      <button
        type="submit"
        className="col-span-1 bg-green-600 hover:bg-green-500 rounded text-slate-50 sm:text-sm lg:text-lg"
      >
        Login
      </button>
      <button
        type="submit"
        className="col-span-1 rounded bg-rose-800 hover:bg-rose-600 text-lg text-slate-50 sm:text-sm lg:text-lg"
      >
        signup
      </button>
    </section>
  );
}
