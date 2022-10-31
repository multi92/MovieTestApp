import React from "react";
import useFetch from "../useFatch";

function Movie2() {
  const {
    data: movie2,

  } = useFetch("https://api.tvmaze.com/shows/2");
 
  return (
    <div>
      <img src={movie2?.image.medium} /> 
      <p>{movie2?.name}</p>
      <p>{movie2?.summary}</p>
    </div>
  );
}

export default Movie2;
