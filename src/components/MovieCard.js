import React from "react";

function MovieCard({ title, year, poster }) {
  return (
    <div className="movie-container">
      <img className="poster" src={poster} alt={title} />
      <div className="detail" >
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
