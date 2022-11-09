import React from "react";

import NavBar from "./NavBar";
import SliderMain from "./SliderMain";
import SlideShow from "./SlideShow";
import TopRated from "./TopRated";
import TVPopular from "./TVPopular";

export default function Main() {
  return (
    <>
      <NavBar />
      <SlideShow />
      <SliderMain />
      <TVPopular />
      <TopRated />
    </>
  );
}
