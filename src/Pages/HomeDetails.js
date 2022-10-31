import useFetch from "../useFatch";

function HomeDetails() {
  const { data: movieFirst } = useFetch("https://api.tvmaze.com/shows/1");

  return (
    <div>
      <div className="movie1">
        <img src={movieFirst?.image.medium}></img>
        <h2> {movieFirst?.name}</h2>
        <p> {movieFirst?.summary}</p>
        <hr />
      </div>
    </div>
  );
}

export default HomeDetails;
