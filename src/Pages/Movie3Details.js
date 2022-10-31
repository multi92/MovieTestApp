import useFetch from "../useFatch";
import "../../src/App.css";


function Movie3Details() {
  const { data: movieThird } = useFetch("https://api.tvmaze.com/shows/3");


  return (
    <div>
      <div className="movie3">
        <h2> {movieThird?.name}</h2>
        <img src={movieThird?.image.medium}></img>
        <p>{movieThird?.rating.average}</p>

        <div className="product__rating"></div>

        <p> {movieThird?.summary}</p>
        <hr />
      </div>
    </div>
  );
}

export default Movie3Details;
