import useFetch from "../useFatch";
import "../../src/App.css";
import { DynamicStar } from "react-dynamic-star";

function HomeDetails() {
  const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div className="movie1">
      <h2> {movieFirst?.name}</h2>

      <DynamicStar />

      <img src={movieFirst?.image.medium}></img>

      <p> {movieFirst?.summary}</p>
      <hr />
    </div>
  );
}

export default HomeDetails;
