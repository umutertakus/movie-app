import { Link } from "react-router-dom";

function MovieCard({ title, year, poster, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-container">
        <img className="poster" src={poster} alt={title} />
        <div className="detail">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
