import useFetch from "../useFatch";
import "../../src/App.css";


function Movie1Details() {
  const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div className="movie1">
      <h2> {movieFirst?.name}</h2>



      <img src={movieFirst?.image.medium}></img>
      <p>{movieFirst?.rating.average}</p>
      

      <p> {movieFirst?.summary}</p>
      <hr />
    </div>
  );
}

export default Movie1Details;
