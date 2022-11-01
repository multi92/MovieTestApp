import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Movie1() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/Movies1");
  }

  const { data: movie1 } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div className="movieComponent">
      <Card style={{ width: "24rem" }}>
        <Card.Img variant="top" src={movie1?.image.medium} />
        <Card.Body>
          <Card.Title> {movie1?.name}</Card.Title>
          <Card.Text>{movie1?.summary}</Card.Text>
          <Button variant="primary" onClick={handleLocation}>
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie1;
