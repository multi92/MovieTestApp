import React from "react";
import useFetch from "../useFatch";

function Movie3Details() {
  const { data: movie3 } = useFetch("https://api.tvmaze.com/shows/3");

  return (
    <div>
      <img src={movie3?.image.medium} />
      <p>{movie3?.name}</p>
      <p>{movie3?.summary}</p>
      <p>{movie3?.rating}</p>
    </div>
  );
}

export default Movie3Details;
