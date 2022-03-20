import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import MovieCard from "./MovieCard";

function ListMovie() {
  const data = useSelector((state) => state.movie.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(data);

  return (
    <div className="card-list">
      {data.Search.map((movieItem) => (
        <div key={movieItem.imdbID}>
          <MovieCard
            title={movieItem.Title}
            year={movieItem.Year}
            poster={movieItem.Poster}
          />
        </div>
      ))}
    </div>
  );
}

export default ListMovie;
