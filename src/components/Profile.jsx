import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { baseImgURL } from "./config";

export default function Profile() {
  const { user, session } = useContext(UserContext);
  return session ? (
    <div className="ml-8 mb-24">
      <h1 className="text-white text-3xl mt-14 mb-8">Profile Page</h1>
      <div className="flex items-center gap-10">
        <img
          src={`${baseImgURL}/w185/${user?.avatar?.tmdb?.avatar_path}`}
          className="rounded-full"
        />
        <h2 className="text-2xl text-teal-700">{user.name}</h2>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
