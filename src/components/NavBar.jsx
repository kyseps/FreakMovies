import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="grid grid-cols-12 mt-10 bg-gray-800 py-4 border-b border-b-2 border-rose-900">
      <ul className="col-span-9 flex gap-8 col-start-2">
        <li>
          <NavLink
            to="/"
            className="text-slate-50 text-lg hover:bg-rose-900 py-5 px-3 rounded"
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tvShow"
            className="text-slate-50 text-lg hover:bg-rose-900 py-5 px-3 rounded"
          >
            TVshow
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/people"
            className="text-slate-50 text-lg hover:bg-rose-900 py-5 px-3 rounded"
          >
            People
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-slate-50 text-lg hover:bg-rose-900 py-5 px-3 rounded"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="col-span-1 flex gap-4">
        <i className="fa-brands fa-twitter text-slate-50 text-xl"></i>
        <i className="fa-brands fa-instagram text-slate-50 text-xl"></i>
        <i className="fa-brands fa-square-facebook text-slate-50 text-xl"></i>
        <i className="fa-solid fa-envelope text-slate-50 text-xl"></i>
      </div>
    </nav>
  );
}
