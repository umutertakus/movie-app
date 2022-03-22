import { fetchMovies } from "../redux/movieSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const [term, setTerm] = useState("");
  const status = useSelector((state) => state.movie.status);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "") console.log("You have to enter a movie/series name.");
    else {
      if (status === "idle") {
        dispatch(fetchMovies(term))
      }
      setTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Type a movie name"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="btn">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <select className="select-box">
        <option value="movie">Movie</option>
        <option value="series">TV Series</option>
      </select>
    </form>
  );
}

export default Search;
