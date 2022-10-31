import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";



function Movie2() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/Movies2");
  }

  const { data: movie2 } = useFetch("https://api.tvmaze.com/shows/2");

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <img src={movie2?.image.medium} /><br/>
          <Button variant="btn btn-success" onClick={handleLocation}>
            Details
          </Button>

          <p>{movie2?.name}</p>
          <p>{movie2?.summary}</p>
      
        </Col>
      </Row>
    </Container>
  );
}

export default Movie2;
