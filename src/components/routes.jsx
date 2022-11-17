import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "./Contact";
import Main from "./Main";
import Movie from "./Movie";
import People from "./People";
import PeopleID from "./PeopleID";
import TvShow from "./TvShow";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/tvShow",
    element: <TvShow />,
  },
  {
    path: "/people",
    element: <People />,
  },
  {
    path: "/people/:id",
    element: <PeopleID />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);
