import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

function ListMovie() {
  const data = useSelector((state) => state.movie.items);
  const status = useSelector((state) => state.movie.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  return (
    <>
    {
      status !== "loading" ? <div className="card-list">
      {data.Search.map((movieItem) => (
        <div className="div-card"  key={movieItem.imdbID}>
          <MovieCard
            title={movieItem.Title}
            year={movieItem.Year}
            poster={movieItem.Poster}
            id={movieItem.imdbID}
          />
        </div>
      ))}
    </div> : <Loading />
    }
    </>
  );
}

export default ListMovie;
