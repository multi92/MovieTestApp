import React from "react";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import Movie3 from "./Movie3";

function Home() {
  return (
    <div className="allMovies">
      <div className="container col-xl-6 col-md-4 col-sm-1">
        <Movie1 />
        <Movie2 />
        <Movie3 />
      </div>
    </div>
  );
}

export default Home;
