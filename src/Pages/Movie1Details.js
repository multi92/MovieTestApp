import useFetch from "../useFatch";
import "../../src/App.css";
import React, { useState } from "react";
import Rating from "react-simple-star-rating";

function Movie1Details() {
  const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div className="movie1">
      <h1> {movieFirst?.name}</h1>
      <p className="rating"> {movieFirst?.rating.average} 🌟🌟🌟🌟🌟🌟</p>

      <p className="genres"> {movieFirst?.genres}</p>

      <p className="pMovieOne"> {movieFirst?.summary}</p>
    </div>
  );
}

export default Movie1Details;
