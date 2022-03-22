import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

function ListMovie() {
  const data = useSelector((state) => state.movie.items);
  const status = useSelector((state) => state.movie.status);

  return (
    <>
      {status !== "loading" ? (
        data.Response === "False" ? (
          <h1 className="white">{data.Error}</h1>
        ) : (
          <div className="card-list">
            {data.Search.map((movieItem) => (
              <div className="div-card" key={movieItem.imdbID}>
                <MovieCard
                  title={movieItem.Title}
                  year={movieItem.Year}
                  poster={movieItem.Poster}
                  id={movieItem.imdbID}
                />
              </div>
            ))}
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ListMovie;
