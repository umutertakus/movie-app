import { fetchMovies } from "../redux/movieSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../selectValues";
import Select from "react-select";

function Search() {
  const [term, setTerm] = useState("");
  const [selectValue, setSelectValue] = useState();
  const [sendValue, setSendValue] = useState("");
  const data = useSelector((state) => state.movie.items);
  const status = useSelector((state) => state.movie.status);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term === "" || sendValue === "")
      console.log("You have to enter a movie/series name.");
    else {
      if (status === "idle" || status === "succeeded") {
        const params = { term, sendValue };
        dispatch(fetchMovies(params));
      }
      setTerm("");
    }
  };

  const handleSelect = (e) => {
    setSendValue(e.value);
  };

  return (
    <>
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
        <Select
          options={selectItems}
          value={selectValue}
          onChange={handleSelect}
        ></Select>
      </form>

      {data.totalResults === 0 && (
        <h1 className="white">Please type a movie name!</h1>
      )}
    </>
  );
}

export default Search;
