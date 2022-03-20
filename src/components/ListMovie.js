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
    <div>
      {data.Search.map((movieItem) => (
          <MovieCard
            key={movieItem.imdbID}
            title={movieItem.Title}
            year={movieItem.Year}
            poster={movieItem.Poster}
          />
      ))}
    </div>
  );
}

export default ListMovie;
