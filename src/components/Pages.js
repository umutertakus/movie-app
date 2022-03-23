import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectPageValue,
  selectResults,
} from "../redux/movieSlice";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";
import { pageChange } from "../redux/movieSlice";

function Pages({ term, sendValue }) {
  const dispatch = useDispatch();
  const pageValue = useSelector(selectPageValue);
  const results = useSelector(selectResults);
  const countNumber = parseInt(results / 10 + 1);

  const handleChange = (event, value) => {
    dispatch(pageChange(value));
  };

  useEffect(() => {
    dispatch(fetchMovies({ term, sendValue, pageValue }));
  }, [pageValue]);

  return (
    results > 0 && (
      <div className="page page-white">
        <Pagination
          page={pageValue}
          onChange={handleChange}
          count={countNumber}
        />
      </div>
    )
  );
}

export default Pages;
