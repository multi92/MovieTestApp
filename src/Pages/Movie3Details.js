import useFetch from "../useFatch";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function MovieDetails3() {
  const { data: movieThird } = useFetch("https://api.tvmaze.com/shows/3");

  return (
    <div className="movie1">
      <h1> {movieThird?.name}</h1>
      <p className="rating"> {movieThird?.rating.average} 🌟🌟🌟🌟🌟🌟🌟🌟</p>
      <p className="genres"> {movieThird?.genres}</p>
      <p className="pMovieOne"> {movieThird?.summary}</p>
      <div className="faIcons">
        <FontAwesomeIcon icon={faClock} />
        <p className="timeMovie"> {movieThird?.averageRuntime} min </p>
      </div>
      <div className="premiered">
        <div className="premiered">premiered: {movieThird?.premiered}</div>
        <div className="ended">ended: {movieThird?.ended}</div>
        <div className="schedule">schedule: {movieThird?.schedule.time}</div>
      </div>
    </div>
  );
}

export default MovieDetails3;
