import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";



function Movie3() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/Movies3");
  }

  const { data: movie3 } = useFetch("https://api.tvmaze.com/shows/3");

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie3?.image.medium} />
    <Card.Body>
        <Card.Title> {movie3?.name}</Card.Title>
      <Card.Text>
      {movie3?.summary}
      </Card.Text>
      <Button variant="primary" onClick={handleLocation}>Details</Button>
    </Card.Body>
  </Card>
  );
}

export default Movie3;
