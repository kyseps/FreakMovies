import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseImgURL, baseURL } from "./config";

import NavBar from "./NavBar";

export default function People() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(3);

  async function getPeople() {
    try {
      const { data } = await axios.get(
        `${baseURL}/person/popular?api_key=${apiKey}&page=${page}`
      );
      setPeople(data.results);
    } catch {
      console.log("Gozashtim");
    }
  }

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <>
      <NavBar />
      <div className="grid gap-x-8 gap-y-4 grid-cols-4 w-11/12 mx-auto p-4">
        {people &&
          people.map((person) => {
            return (
              <div
                key={person.id}
                className="flex h-44 gap-4 bg-gray-800 rounded-lg"
              >
                <img
                  className="rounded-lg"
                  src={`${baseImgURL}/w780/${person.profile_path}`}
                />
                <p className="text-rose-600 text-base">{person.name}</p>
              </div>
            );
          })}
      </div>
      <hr />
      <div className="w-3/5 mx-auto m-3">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((p) => (
          <button
            onClick={() => setPage(p)}
            key={p}
            className="p-2 text-rose-600 bg-white mr-3"
          >
            {p}
          </button>
        ))}
      </div>
    </>
  );
}
