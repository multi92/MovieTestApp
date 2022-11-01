import useFetch from "../useFatch";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Movie2Details() {
  const { data: movieSecond } = useFetch("https://api.tvmaze.com/shows/2");

  return (
    <div className="movie1">
      <h1> {movieSecond?.name}</h1>
      <p className="rating"> {movieSecond?.rating.average} 🌟🌟🌟🌟🌟🌟🌟🌟</p>
      <p className="genres"> {movieSecond?.genres}</p>
      <p className="pMovieOne"> {movieSecond?.summary}</p>
      <div className="faIcons">
        <FontAwesomeIcon icon={faClock} />
        <p className="timeMovie"> {movieSecond?.averageRuntime} min </p>
      </div>
      <div className="premiered">
        <div className="premiered">premiered: {movieSecond?.premiered}</div>
        <div className="ended">ended: {movieSecond?.ended}</div>
        <div className="schedule">schedule: {movieSecond?.schedule.time}</div>
      </div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default Movie2Details;
