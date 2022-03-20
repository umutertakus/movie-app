import React from "react";

function MovieCard({ title, year, poster }) {
  return (
    <div>
      <p>{title}</p>
      <p>{year}</p>
      <img src={poster} alt={title} />
    </div>
  );
}

export default MovieCard;
