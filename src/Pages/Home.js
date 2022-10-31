import React from "react";
import useFetch from "../useFatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

//Pages
import Movie2 from "./Movie2";
import Movie3 from "./Movie3";

function Home() {
  const history = useNavigate();

  function handleLocation(e) {
    e.preventDefault();
    history("/HomeDetails");
  }

  const { data: movie1 } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <Container className="container">
      <Row>
        <Col xl={6}>
          <img src={movie1?.image.medium} />
          <Button variant="btn btn-success" onClick={handleLocation}>
            Details
          </Button>

          <p>{movie1?.name}</p>
          <p>{movie1?.summary}</p>
          <Movie2 />
          <Movie3 />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
