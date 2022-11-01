import useFetch from "../useFatch";
import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function Movie1Details() {
  const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div className="movie1">
      <h1> {movieFirst?.name}</h1>
      <p className="rating"> {movieFirst?.rating.average} 🌟🌟🌟🌟🌟🌟</p>
      <p className="genres"> {movieFirst?.genres}</p>
      <p className="pMovieOne"> {movieFirst?.summary}</p>
      <div className="faIcons">
        <FontAwesomeIcon icon={faClock} />
        <p className="timeMovie"> {movieFirst?.averageRuntime} min </p>
      </div>
      <div className="premiered">
        <div className="premiered">premiered: {movieFirst?.premiered}</div>
        <div className="ended">ended: {movieFirst?.ended}</div>
        <div className="schedule">schedule: {movieFirst?.schedule.time}</div>
      </div>

      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default Movie1Details;
