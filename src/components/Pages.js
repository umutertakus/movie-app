import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

function Pages({ term, sendValue }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const results = useSelector((state) => state.movie.items.totalResults);
  const countNumber = parseInt(results / 10 + 1);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(fetchMovies({ term, sendValue, value }));
  };

  return (
    <>
      {results > 0 && (
        <div className="page page-white">
          <Pagination page={page} onChange={handleChange} count={countNumber} />
        </div>
      )}
    </>
  );
}

export default Pages;
