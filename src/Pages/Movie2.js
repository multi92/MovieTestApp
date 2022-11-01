import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";



function Movie2() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/Movies2");
  }

  const { data: movie2 } = useFetch("https://api.tvmaze.com/shows/2");

  return (
    <Card style={{ width: '24rem' }}>
    <Card.Img variant="top" src={movie2?.image.medium} />
    <Card.Body>
        <Card.Title> {movie2?.name}</Card.Title>
      <Card.Text>
      {movie2?.summary}
      </Card.Text>
      <Button variant="primary" onClick={handleLocation}>Details</Button>
    </Card.Body>
  </Card>
  );
}

export default Movie2;
