import React, { useState, useEffect } from "react";
// import useFetch from "../useFatch";

function HomeDetails() {
  // const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");
  // console.log(data);
  let [movieFirst, setMovie1] = useState();

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/1")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setMovie1(data));
    console.log(movieFirst);
  }, []);

  return (
    <div>
      {/* <img src={movieFirst?.image.medium} /> 
      <p>{movieFirst?.name}</p>
          <p>{movieFirst?.summary}</p>
          <p>{movieFirst?.rating}</p> */}

      {movieFirst.map((movie) => {
        return (
          <div>
            <h2>name: {movie?.name}</h2>
            <h2>country: {movie?.summary}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default HomeDetails;
