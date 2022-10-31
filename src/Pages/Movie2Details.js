import useFetch from "../useFatch";
import "../../src/App.css";
import { DynamicStar } from "react-dynamic-star";

function Movie2Details
() {
  const { data: movieSecond } = useFetch("https://api.tvmaze.com/shows/2");

  return (
    
      <div className="movie2">
      <h2> {movieSecond?.name}</h2>
      


      <img src={movieSecond?.image.medium}></img>
      
      <DynamicStar  />

        <div className="product__rating"></div>

        <p> {movieSecond?.summary}</p>
        <hr />
      </div>
    
  );
}

export default Movie2Details
;
