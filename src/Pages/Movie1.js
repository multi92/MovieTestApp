import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Movie1() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/Movies1");
  }

  const { data: movie1 } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <Container className="container">
      <Row>
        <Col xl={12}>
          <img src={movie1?.image.medium} />
          <br />

        
          <Button variant="btn btn-success" onClick={handleLocation}>
            Details
          </Button>

          <p>{movie1?.name}</p>
          <p>{movie1?.summary}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Movie1;
