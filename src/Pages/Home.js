import React from "react";
import Movie1 from "./Movie1";
import Movie2 from "./Movie2";
import Movie3 from "./Movie3";

function Home() {
  return (
    <div className="allMovies">
      <div className="container">
        <div className="row col-xl-12">
          <Movie1 />
          <Movie2 />
          <Movie3/>
        </div>
     
   
      </div>
    </div>
  );
}

export default Home;
