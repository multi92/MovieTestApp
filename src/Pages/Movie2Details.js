import useFetch from "../useFatch";
import "../../src/App.css";


function Movie2Details
() {
  const { data: movieSecond } = useFetch("https://api.tvmaze.com/shows/2");

  return (
    
      <div className="movie2">
      <h2> {movieSecond?.name}</h2>
      


      <img src={movieSecond?.image.medium}></img>
      <p>{movieSecond?.rating.average}</p>
      
    

        <div className="product__rating"></div>

        <p> {movieSecond?.summary}</p>
        <hr />
      </div>
    
  );
}

export default Movie2Details
;
