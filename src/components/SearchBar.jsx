import React from "react";

export default function SearchBar() {
  return (
    <section className=" grid grid-cols-12 mt-8 gap-8">
      <section className="col-span-2 col-start-2">
        <span className=" p-2 text-rose-500 freakFont text-2xl">
          FreakMovies
        </span>
      </section>
      <input
        placeholder="Search for a movie,Tvshow,Person ..."
        type="search"
        name=""
        id=""
        className="col-span-6 rounded-xl text-lg p-2"
      />
      <button
        type="submit"
        className="col-span-1 bg-green-600 rounded text-lg text-slate-50"
      >
        Login
      </button>
      <button
        type="submit"
        className="col-span-1 rounded bg-rose-900 text-lg text-slate-50 "
      >
        Register
      </button>
    </section>
  );
}
