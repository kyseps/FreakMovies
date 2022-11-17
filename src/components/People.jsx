import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseImgURL, baseURL } from "./config";

import NavBar from "./NavBar";

export default function People() {
  const [people, setPeople] = useState([]);

  async function getPeople() {
    try {
      const { data } = await axios.get(
        `${baseURL}/person/popular?api_key=${apiKey}&page=1`
      );
      console.log(data.results);
      setPeople(data.results);
    } catch {
      console.log("Gozashtim");
    }
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <NavBar />
      <h1>People</h1>

      {people.map((person) => {
        return (
          <div className="">
            <img src={`${baseImgURL}/w780/${person.profile_path}`} />
            <p>{person.name}</p>
          </div>
        );
      })}
    </>
  );
}
